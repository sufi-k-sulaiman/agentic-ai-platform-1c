import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, Mic, Image, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogMultiModalProcessing() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Multi-Modal Processing: Agents That See, Hear, and Understand"
        description="Explore multi-modal AI capabilities. Vision processing, speech recognition, image generation, cross-modal reasoning, and unified understanding."
        url="/blog/multi-modal-processing"
        keywords={['multi-modal AI', 'vision AI', 'speech recognition', 'image processing', 'audio processing', 'cross-modal reasoning']}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-purple-100 text-[#8B2EE5]">Agentic Capabilities</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Multi-Modal Processing: Agents That See, Hear, and Understand
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. Emily Carter</span>
          <span>•</span>
          <span>January 19, 2025</span>
          <span>•</span>
          <span>18 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200"
          alt="Multi-Modal AI"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The future of AI agents is multi-modal—systems that process text, images, audio, and video seamlessly. These capabilities enable richer interactions, deeper understanding, and solutions to problems that single-modal systems can't handle. This guide explores multi-modal agent capabilities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Vision Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Image Understanding</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Object detection and recognition</li>
                <li>• Scene understanding</li>
                <li>• Text extraction (OCR)</li>
                <li>• Face and emotion recognition</li>
                <li>• Image classification</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Image className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Image Generation</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Create images from text descriptions</li>
                <li>• Edit existing images</li>
                <li>• Style transfer and variation</li>
                <li>• Image-to-image translation</li>
                <li>• Diagram and chart generation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Audio Processing Capabilities</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Speech and Audio</h3>
            </div>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Speech-to-Text:</strong>
                <p className="text-sm text-gray-700">Convert spoken words to text with high accuracy across accents and languages</p>
              </div>
              <div>
                <strong className="text-gray-900">Text-to-Speech:</strong>
                <p className="text-sm text-gray-700">Generate natural-sounding speech in multiple voices and languages</p>
              </div>
              <div>
                <strong className="text-gray-900">Audio Analysis:</strong>
                <p className="text-sm text-gray-700">Detect sentiment, speaker diarization, background noise classification</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Video Understanding</h2>

          <div className="flex items-start gap-3 mb-8">
            <Video className="w-6 h-6 text-[#8B2EE5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Video Processing Capabilities</h3>
              <p className="text-gray-700 mb-4">Agents can process video content frame by frame and extract meaningful insights:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Action recognition (what's happening?)</li>
                <li>• Object tracking across frames</li>
                <li>• Scene change detection</li>
                <li>• Highlight extraction and summarization</li>
                <li>• Caption and description generation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cross-Modal Reasoning</h2>

          <p className="text-gray-700 mb-6">
            The real power comes from combining modalities:
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Example: Product Support Query</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 rounded p-3">
                <strong className="text-gray-900">User input:</strong> <span className="text-gray-700">"My device isn't working" + photo of error screen</span>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <strong className="text-blue-900">Agent processing:</strong>
                <ul className="text-gray-700 mt-2 ml-4 space-y-1">
                  <li>1. Analyzes image → detects error code 0x8007</li>
                  <li>2. Reads text description → understands frustration</li>
                  <li>3. Cross-references knowledge base</li>
                  <li>4. Generates solution with step-by-step images</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-sm text-gray-700">Analyze medical images, understand patient descriptions, generate diagnostic reports</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">E-commerce</h3>
              <p className="text-sm text-gray-700">Visual search, image-based recommendations, video product demos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-sm text-gray-700">Analyze student work (text, diagrams), provide audio/video explanations</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Content Creation</h3>
              <p className="text-sm text-gray-700">Generate images from text, create videos from scripts, voice-overs</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Multi-modal capabilities unlock entirely new categories of problems AI agents can solve. As these technologies mature, agents will interact with the world more like humans do—through sight, sound, and multiple senses working together.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build multi-modal agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI that sees, hears, and understands like humans
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}