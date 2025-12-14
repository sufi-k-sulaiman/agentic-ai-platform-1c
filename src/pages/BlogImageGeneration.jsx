import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';

export default function BlogImageGeneration() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="AI Image Generation: From DALL-E to Midjourney"
        description="Comprehensive guide to AI image generation tools, techniques, and creative applications for businesses and creators."
        url="/blog/ai-image-generation"
        keywords={['AI image generation', 'DALL-E', 'Midjourney', 'Stable Diffusion', 'text-to-image', 'AI art']}
      />

      <article className="max-w-4xl mx-auto px-6 py-32">
        <BreadcrumbNav items={[
          { label: 'Blog', page: 'Blog' },
          { label: 'AI Image Generation' }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Image Generation: From DALL-E to Midjourney
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Maya Chen</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 8, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12 min read</span>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1686191128892-7bfeb27b2c7c?w=1200" 
            alt="AI Generated Art" 
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            AI image generation has democratized visual creativity. What once required years of training and expensive software now happens in seconds with a text prompt. These tools are transforming design, marketing, entertainment, and how we think about creativity itself.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Revolution in Image Creation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2022, text-to-image AI exploded into mainstream consciousness. Suddenly anyone could generate stunning visuals by describing what they wanted. The technology has matured rapidly—today's models create photorealistic images, consistent characters, and specific artistic styles with remarkable accuracy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Leading Platforms Compared</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DALL-E 3 (OpenAI)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Integrated with ChatGPT for natural language prompts. Excellent at understanding complex descriptions and generating accurate compositions. Best for: precise concepts, text in images, brand-safe content. Costs $0.04-0.12 per image.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Midjourney</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Known for artistic, aesthetically striking outputs. Strong community and style library. Best for: creative exploration, artistic projects, concept art. Subscription: $10-120/month depending on usage.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stable Diffusion</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Open-source model you can run locally or customize. Complete control over generation process. Best for: custom fine-tuning, commercial use, privacy-sensitive projects. Free (compute costs only).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adobe Firefly</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trained on licensed Adobe Stock images for commercial safety. Deep Photoshop integration. Best for: professional designers, commercial projects, brand work. Included with Creative Cloud.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Business Applications</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Marketing and Advertising</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create unlimited ad variations for A/B testing. Generate custom visuals for campaigns without photoshoots. Produce social media graphics at scale. Marketing teams report 70% cost reduction and 5x faster asset production.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Product Design</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rapidly prototype product concepts and packaging designs. Visualize products in different settings and use cases. Generate lifestyle imagery without physical samples. Design cycles compressed from weeks to days.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">E-commerce</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Create product images with perfect lighting and backgrounds. Generate lifestyle photos showing products in context. Produce seasonal variations without reshoots. Conversion rates increase 25-40% with professional AI-generated imagery.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Entertainment and Media</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Concept art for films, games, and books. Storyboarding and visual development. Character design and environment creation. Studios use AI to explore creative directions 10x faster than traditional methods.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mastering Prompt Engineering</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quality outputs require effective prompts. Key elements:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Subject and Composition</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Clearly describe the main subject, its position, and framing. Example: "Close-up portrait of a smiling woman, centered, eye-level perspective."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Style and Aesthetic</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Specify artistic style, medium, or artist inspiration. Example: "Oil painting in impressionist style" or "Photorealistic architectural rendering."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lighting and Atmosphere</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Define lighting conditions and mood. Example: "Soft golden hour lighting, warm tones, serene atmosphere."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Parameters</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Include quality indicators and technical specs. Example: "8K resolution, highly detailed, professional photography."
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Techniques</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Consistent Character Generation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maintain character consistency across multiple images using detailed descriptions, style references, and specialized tools like Midjourney's character references. Essential for storytelling and branding.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Image-to-Image Transformation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Upload reference images and transform them. Change styles, modify elements, or create variations. Useful for product restyling and creative exploration.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Inpainting and Outpainting</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Edit specific areas of images (inpainting) or extend images beyond original borders (outpainting). Perfect for refinement and composition adjustment.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Legal and Ethical Considerations</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Copyright and Licensing</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Copyright status of AI-generated images remains evolving. Many platforms grant commercial usage rights, but check terms carefully. Document your generation process for IP purposes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Training Data Ethics</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Models trained on internet data raise questions about artist compensation. Some platforms like Adobe Firefly use only licensed content. Consider ethical implications of your tool choice.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Deepfakes and Misinformation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Photorealistic generation enables malicious use. Implement watermarking, disclosure policies, and content verification for public-facing AI imagery.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices for Businesses</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Define use cases:</strong> Start with specific needs like social media, ads, or product imagery</li>
            <li><strong>Build prompt libraries:</strong> Document successful prompts for consistency</li>
            <li><strong>Human curation:</strong> AI generates options; humans select and refine</li>
            <li><strong>Brand guidelines:</strong> Maintain visual identity through style specifications</li>
            <li><strong>Quality control:</strong> Review all outputs before publication</li>
            <li><strong>Track ROI:</strong> Measure time saved, costs reduced, and performance improvements</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of AI Imagery</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Coming developments include video generation from text, 3D model creation, real-time interactive editing, perfect consistency across image sets, and integration with design tools.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            AI image generation isn't replacing designers and artists—it's empowering them to work faster, explore more ideas, and focus on strategic creativity. The winners will be those who master these tools while maintaining human judgment, creativity, and emotional intelligence.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Visual Content</h3>
            <p className="text-gray-700 mb-6">
              Discover how AI image generation can accelerate your creative workflows and reduce production costs.
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}