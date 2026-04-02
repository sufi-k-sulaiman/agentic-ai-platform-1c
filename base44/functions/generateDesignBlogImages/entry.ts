import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    const posts = [
      { title: 'UX Design for AI Agents', prompt: 'UX designer sketching AI agent interface wireframes on tablet and paper, modern design studio with mood boards, creative thinking process, natural lighting, photorealistic lifestyle' },
      { title: 'Conversational AI Interfaces', prompt: 'Designer prototyping conversational AI chat interface on laptop, message bubbles and flows visible on screen, clean workspace, focused creative work, photorealistic lifestyle' },
      { title: 'Visual Design Patterns', prompt: 'Design team reviewing AI interface pattern library on large screen, discussing visual components and design system, collaborative workspace, photorealistic lifestyle' },
      { title: 'AI Transparency Design', prompt: 'Product designer creating explainable AI dashboard interface showing decision paths, transparency and trust focus, modern office setup, photorealistic lifestyle' },
      { title: 'Multi-Agent UI Design', prompt: 'Designer mapping multiple AI agent interactions on whiteboard, complex system diagrams and user flows, strategic design planning, photorealistic lifestyle' },
      { title: 'AI Agent Personas', prompt: 'Design researcher creating AI agent personality profiles and personas, mood boards with character traits, creative process, photorealistic lifestyle' },
      { title: 'AI-First Design Systems', prompt: 'Design system architect building component library for AI products, organized interface elements on screen, systematic approach, photorealistic lifestyle' },
      { title: 'Accessible AI Design', prompt: 'Inclusive design specialist testing AI interface with accessibility tools, diverse user considerations, empathetic design process, photorealistic lifestyle' }
    ];
    
    const results = [];
    
    for (const post of posts) {
      const imageResult = await base44.asServiceRole.integrations.Core.GenerateImage({
        prompt: post.prompt
      });
      
      results.push({
        title: post.title,
        imageUrl: imageResult.url
      });
    }
    
    return Response.json({ 
      success: true,
      images: results
    });
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});