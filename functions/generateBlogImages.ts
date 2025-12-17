import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { batch = 0 } = await req.json();
    
    const allPosts = [
      { title: 'Rise of Agentic AI', prompt: 'Professional business team celebrating innovation breakthrough in bright modern office, digital transformation atmosphere, diverse group excited, natural lighting, photorealistic lifestyle' },
      { title: 'Autonomous Agents Revolution', prompt: 'Business operations team collaborating around digital displays showing automation workflows, efficient modern workspace, photorealistic lifestyle' },
      { title: 'Multi-Agent Systems', prompt: 'Software architects designing complex multi-agent orchestration on whiteboards and screens, collaborative technical planning session, photorealistic lifestyle' },
      { title: 'No-Code AI', prompt: 'Business user building AI solutions on laptop without coding, intuitive drag-drop interface visible, empowered non-technical professional, photorealistic lifestyle' },
      { title: 'Trust and Security', prompt: 'Security team reviewing AI system safeguards and trust frameworks, serious professional meeting, secure environment, photorealistic lifestyle' },
      { title: 'ROI Measurement', prompt: 'Financial analyst calculating AI investment returns on spreadsheets and dashboards, data-driven business analysis, photorealistic lifestyle' },
      { title: 'Human-AI Collaboration', prompt: 'Diverse team working alongside AI assistants, humans and technology collaborating harmoniously, future workplace setting, photorealistic lifestyle' },
      { title: 'Automation Evolution', prompt: 'Timeline visualization showing evolution from basic automation to autonomous AI, professional presentation setting, photorealistic lifestyle' },
      { title: 'Enterprise Use Cases', prompt: 'Business leaders reviewing real-world AI agent implementations across departments, use case presentation, professional meeting, photorealistic lifestyle' },
      { title: 'Ethical Deployment', prompt: 'Ethics committee thoughtfully discussing responsible AI deployment frameworks, diverse perspectives, inclusive meeting, photorealistic lifestyle' },
      { title: 'Pilot to Production', prompt: 'Engineering team scaling AI systems from prototype to full production, deployment celebration, modern tech office, photorealistic lifestyle' },
      { title: 'Advanced Generative Techniques', prompt: 'AI researcher working with advanced generative models and RAG systems, technical research environment, focused analysis, photorealistic lifestyle' },
      { title: 'Healthcare Governance', prompt: 'Healthcare administrators reviewing AI compliance and patient safety protocols, medical facility setting, professional healthcare, photorealistic lifestyle' },
      { title: 'Financial Services AI', prompt: 'Financial analysts working with autonomous trading and fraud detection systems, professional banking environment, photorealistic lifestyle' },
      { title: 'Architecture Comparison', prompt: 'Technical lead comparing different AI architecture patterns on dual monitors, code and diagrams visible, engineering workspace, photorealistic lifestyle' },
      { title: 'Streaming Analytics', prompt: 'Data engineers building real-time analytics dashboards with live data streams, monitoring multiple screens, operations center, photorealistic lifestyle' },
      { title: 'Content Moderation', prompt: 'Content safety team implementing AI moderation systems, reviewing safety policies and tools, responsible tech environment, photorealistic lifestyle' }
    ];
    
    const batchSize = 6;
    const startIdx = batch * batchSize;
    const posts = allPosts.slice(startIdx, startIdx + batchSize);
    
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
      batch, 
      images: results,
      hasMore: startIdx + batchSize < allPosts.length
    });
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});