import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Download, Calendar, Users, CheckCircle, Clock, XCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function EventRegistrations() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: registrations = [], isLoading } = useQuery({
    queryKey: ['eventRegistrations'],
    queryFn: () => base44.entities.EventRegistration.list('-created_date'),
    initialData: []
  });

  const { data: events = [] } = useQuery({
    queryKey: ['events'],
    queryFn: () => base44.entities.Event.list('-created_date'),
    initialData: []
  });

  const filteredRegistrations = registrations.filter(reg => 
    reg.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reg.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reg.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reg.event_title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reg.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    waitlist: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
    attended: 'bg-blue-100 text-blue-800'
  };

  const statusIcons = {
    confirmed: CheckCircle,
    waitlist: Clock,
    cancelled: XCircle,
    attended: CheckCircle
  };

  const stats = {
    total: registrations.length,
    confirmed: registrations.filter(r => r.registration_status === 'confirmed').length,
    attended: registrations.filter(r => r.registration_status === 'attended').length,
    events: events.length
  };

  return (
        <InternalLinker currentPage="EventRegistrations">
    <div className="min-h-screen bg-gray-50 py-8">
      <PageMeta 
        title="Event Registrations"
        description="Manage event registrations"
        url="/event-registrations"
        noIndex
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Registrations</h1>
          <p className="text-gray-600">Manage and track all event registrations</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Registrations</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <Users className="w-10 h-10 text-[#8B2EE5]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Confirmed</p>
                  <p className="text-3xl font-bold text-green-600">{stats.confirmed}</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Attended</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.attended}</p>
                </div>
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Events</p>
                  <p className="text-3xl font-bold text-[#8B2EE5]">{stats.events}</p>
                </div>
                <Calendar className="w-10 h-10 text-[#8B2EE5]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Actions */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search by name, email, company, or event..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Registrations ({filteredRegistrations.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12 text-gray-500">Loading registrations...</div>
            ) : filteredRegistrations.length === 0 ? (
              <div className="text-center py-12 text-gray-500">No registrations found</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Ticket Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRegistrations.map((registration) => {
                      const StatusIcon = statusIcons[registration.registration_status] || CheckCircle;
                      return (
                        <TableRow key={registration.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {registration.first_name} {registration.last_name}
                          </TableCell>
                          <TableCell>{registration.email}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {registration.event_title}
                          </TableCell>
                          <TableCell>{registration.company || '—'}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {registration.ticket_type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={statusColors[registration.registration_status]}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {registration.registration_status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {new Date(registration.created_date).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </InternalLinker>
  );
}