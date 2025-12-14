import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';

export default function BlogGenerativeAIIntro() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Understanding Generative AI: A Comprehensive Introduction"
        description="Learn what generative AI is, how it works, and why it's revolutionizing industries from content creation to software development."
        url="/blog/generative-ai-intro"
        keywords={['generative AI', 'artificial intelligence', 'AI introduction', 'machine learning', 'deep learning']}
      />

      <article className="max-w-4xl mx-auto px-6 py-32">
        <BreadcrumbNav items={[
          { label: 'Blog', page: 'Blog' },
          { label: 'Understanding Generative AI' }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Understanding Generative AI: A Comprehensive Introduction
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Dr. Emily Rodriguez</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 12, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>10 min read</span>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1200" 
            alt="Generative AI Concept" 
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Generative AI represents a breakthrough in artificial intelligence—systems that can create new content, from text and images to code and music. Unlike traditional AI that analyzes and classifies, generative AI produces original outputs that never existed before.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Generative AI?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generative AI refers to models that learn patterns from vast amounts of training data and use that knowledge to generate new, similar content. These systems don't simply copy—they understand underlying structures and create novel combinations.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Technologies</h3>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Large Language Models (LLMs):</strong> Generate human-like text (GPT-4, Claude, Gemini)</li>
            <li><strong>Diffusion Models:</strong> Create high-quality images from text descriptions (DALL-E, Midjourney, Stable Diffusion)</li>
            <li><strong>Generative Adversarial Networks (GANs):</strong> Produce realistic synthetic data</li>
            <li><strong>Transformer Architectures:</strong> Power most modern generative systems</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Does It Work?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generative AI models are trained on massive datasets containing billions of examples. During training, they learn statistical patterns, relationships, and structures. When prompted, they predict the most likely next tokens (words, pixels, etc.) based on what they've learned.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Training Process</h3>
          <ol className="space-y-3 text-gray-700 mb-8 list-decimal list-inside">
            <li><strong>Data Collection:</strong> Gather diverse, high-quality training examples</li>
            <li><strong>Preprocessing:</strong> Clean and structure data for model consumption</li>
            <li><strong>Model Training:</strong> Adjust billions of parameters through iterative learning</li>
            <li><strong>Fine-tuning:</strong> Refine for specific tasks or domains</li>
            <li><strong>Evaluation:</strong> Test quality, accuracy, and safety</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real-World Applications</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content Creation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Marketing teams use generative AI to produce blog posts, social media content, and ad copy in minutes. Writers leverage it for brainstorming, editing, and overcoming creative blocks. The technology augments human creativity rather than replacing it.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Software Development</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Developers use AI coding assistants to write code, debug issues, and explain complex functions. Studies show 55% productivity gains when developers use these tools, dramatically accelerating software delivery.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Design and Art</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Designers generate mockups, illustrations, and variations in seconds. Artists explore new creative directions by combining styles and concepts. The democratization of design tools enables non-designers to create professional visuals.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Business Impact</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>80% time savings</strong> in content production workflows</li>
            <li><strong>$4.4 trillion</strong> estimated annual economic impact by 2030</li>
            <li><strong>40% of work</strong> activities could be automated or augmented</li>
            <li><strong>300% ROI</strong> reported by early enterprise adopters</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Challenges and Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While powerful, generative AI comes with important considerations:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Accuracy:</strong> Models can produce incorrect or "hallucinated" information</li>
            <li><strong>Bias:</strong> Training data biases can perpetuate in outputs</li>
            <li><strong>Copyright:</strong> Questions around ownership of AI-generated content</li>
            <li><strong>Ethics:</strong> Potential for misuse in deepfakes and misinformation</li>
            <li><strong>Cost:</strong> Computational resources required for training and inference</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Organizations can begin their generative AI journey by:
          </p>
          <ol className="space-y-3 text-gray-700 mb-8 list-decimal list-inside">
            <li>Identifying high-value use cases in your domain</li>
            <li>Experimenting with existing platforms (ChatGPT, Claude, Midjourney)</li>
            <li>Building small proof-of-concepts before scaling</li>
            <li>Establishing governance and ethical guidelines</li>
            <li>Training teams on effective AI collaboration</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Generative AI</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We're still in the early days. Future developments will bring multimodal models that seamlessly work across text, image, video, and audio; more specialized domain-specific models; better reasoning capabilities; and improved accuracy and safety.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Generative AI isn't just a tool—it's a paradigm shift in how we create, work, and solve problems. Understanding these systems today prepares you for the AI-augmented future of tomorrow.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Harness Generative AI?</h3>
            <p className="text-gray-700 mb-6">
              Discover how generative AI can transform your business operations and unlock new possibilities.
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