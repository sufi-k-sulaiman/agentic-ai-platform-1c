import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video, Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

const videos = [
  { 
    title: 'Platform overview walkthrough', 
    description: 'Complete tour of the 1cPlatform interface and features', 
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop'
  },
  { 
    title: 'Building your first agent', 
    description: 'Step-by-step video guide to creating an AI agent', 
    duration: '8:30',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop'
  },
  { 
    title: 'API integration tutorial', 
    description: 'Connect 1cPlatform to your applications', 
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
  },
  { 
    title: 'Multi-agent orchestration', 
    description: 'Coordinate multiple AI agents for complex workflows', 
    duration: '18:15',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
  },
  { 
    title: 'Security best practices', 
    description: 'Secure your AI agents and data', 
    duration: '10:45',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop'
  },
  { 
    title: 'Performance optimization', 
    description: 'Make your agents faster and more efficient', 
    duration: '14:30',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
  },
  { 
    title: 'Advanced workflow automation', 
    description: 'Build complex automated workflows', 
    duration: '22:00',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
  },
  { 
    title: 'Team collaboration features', 
    description: 'Work effectively with your team on 1cPlatform', 
    duration: '9:15',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop'
  }
];

export default function VideoTutorialsGuide() {
  return (
        <InternalLinker currentPage="VideoTutorialsGuide">
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Video Tutorials"
        description="Learn by watching our comprehensive video tutorials covering all aspects of 1cPlatform."
        url="/video-tutorials"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: '1C Platform Video Tutorials',
            description: 'Learn by watching our comprehensive video tutorials covering all aspects of 1cPlatform.',
            uploadDate: '2025-01-01',
            thumbnailUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
            contentUrl: 'https://1cplatform.com/video-tutorials',
          }
        ]}
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link to={createPageUrl('HelpCenter')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Video className="w-8 h-8 text-[#8B2EE5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Tutorials
            </h1>
            <p className="text-xl text-gray-600">Learn by watching our expert-crafted video guides.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#8B2EE5]/30 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-900">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#8B2EE5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#8B2EE5] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8">Request a custom tutorial or contact our support team</p>
          <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">
            Request a tutorial
          </Button>
        </div>
      </section>
    </div>
    </InternalLinker>
  );
}