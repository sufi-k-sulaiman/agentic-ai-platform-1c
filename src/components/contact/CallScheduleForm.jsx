import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isAfter, isBefore } from 'date-fns';

const timeSlots = [
  '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am',
  '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm',
  '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm'
];

export default function CallScheduleForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: ''
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const getDaysInMonth = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const days = [];
    let day = startDate;
    
    while (isBefore(day, endDate) || isSameDay(day, endDate)) {
      days.push(day);
      day = addDays(day, 1);
    }
    
    return days;
  };

  const isAvailableDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return isAfter(date, today) && isSameMonth(date, currentMonth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.topic.trim()) newErrors.topic = 'Topic is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      await base44.entities.CallSchedule.create({
        ...formData,
        preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
        preferred_time: selectedTime || ''
      });
      onSuccess();
    } catch (error) {
      console.error('Error scheduling call:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Select a Date & Time</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {format(currentMonth, 'MMMM yyyy')}
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#6209e6]" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#6209e6]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {getDaysInMonth().map((day, idx) => {
                const isAvailable = isAvailableDate(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentMonth);

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => isAvailable && setSelectedDate(day)}
                    disabled={!isAvailable}
                    className={`
                      aspect-square rounded-full text-lg font-medium transition-all
                      ${!isCurrentMonth ? 'text-gray-300 cursor-default' : ''}
                      ${isAvailable && !isSelected ? 'text-[#6209e6] bg-purple-50 hover:bg-purple-100' : ''}
                      ${isSelected ? 'bg-[#6209e6] text-white ring-4 ring-purple-200' : ''}
                      ${!isAvailable && isCurrentMonth ? 'text-gray-400 cursor-not-allowed' : ''}
                    `}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slots */}
          <div>
            {selectedDate && (
              <>
                <div className="mb-4 text-lg font-semibold text-gray-900">
                  {format(selectedDate, 'EEEE, MMMM d')}
                </div>
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full py-3 px-4 rounded-lg border-2 text-center font-medium transition-all
                        ${selectedTime === time 
                          ? 'border-[#6209e6] bg-purple-50 text-[#6209e6]' 
                          : 'border-gray-200 text-gray-700 hover:border-[#6209e6] hover:bg-purple-50'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <Button
          type="button"
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-[#6209e6] hover:bg-[#5008c5] h-12 text-lg mt-6"
        >
          Continue
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-[#6209e6] hover:underline mb-4 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to calendar
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Details</h2>
        <p className="text-gray-600">
          Selected: {selectedDate && format(selectedDate, 'EEEE, MMMM d')} at {selectedTime}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            className={`mt-2 ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="company">Company (Optional)</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="topic">What would you like to discuss?</Label>
        <Textarea
          id="topic"
          required
          rows={4}
          value={formData.topic}
          onChange={(e) => {
            setFormData({ ...formData, topic: e.target.value });
            if (errors.topic) setErrors({ ...errors, topic: '' });
          }}
          placeholder="Brief description of the call topic..."
          className={`mt-2 ${errors.topic ? 'border-red-500' : ''}`}
        />
        {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#6209e6] hover:bg-[#5008c5] h-12 text-lg"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Scheduling...
          </>
        ) : (
          'Schedule Call'
        )}
      </Button>
    </form>
  );
}