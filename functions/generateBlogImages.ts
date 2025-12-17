import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    const blogPosts = [
      { title: 'Agentic AI vs Traditional AI: Complete Comparison Guide', prompt: 'Professional diverse team comparing two different technology approaches on dual whiteboards in modern office, pointing at charts and diagrams, collaborative discussion atmosphere, natural daylight, photorealistic' },
      { title: 'When to Use Agentic AI vs Traditional AI: Decision Framework', prompt: 'Business executive standing at decision tree flowchart on glass wall, thoughtfully choosing between options, modern corporate office with city view background, professional photorealistic' },
      { title: 'Agentic AI vs Rule-Based Systems', prompt: 'Professional analyzing complex system rules and logic on paper notebooks versus digital screens, contrasting traditional and modern methods, clean workspace setup, photorealistic lifestyle' },
      { title: 'Cost Comparison: Agentic AI vs Traditional AI Systems', prompt: 'Financial analyst reviewing cost spreadsheets and budget reports at organized desk, calculator and charts visible, professional business environment with natural lighting, photorealistic' },
      { title: 'Performance Analysis: Agentic AI vs Traditional AI Benchmarks', prompt: 'Tech professional running performance benchmarks on laptop showing speed metrics and graphs, focused expression, modern minimalist office workspace, photorealistic' },
      { title: 'Architecture Differences: Agentic AI vs Traditional AI Systems', prompt: 'Software architect drawing system architecture diagrams on large monitor, showing data flow and infrastructure components, bright contemporary office, photorealistic lifestyle' },
      { title: 'Agentic AI Architecture Patterns: ReAct, Chain-of-Thought', prompt: 'Developer working on architecture patterns and frameworks on multiple screens, code and diagrams visible, focused workspace with plants, natural light, photorealistic' },
      { title: 'Memory Management in Agentic AI', prompt: 'Professional organizing data storage systems, filing cabinets and digital screens showing memory organization, clean modern office space, photorealistic lifestyle' },
      { title: 'Tool Integration in Agentic AI', prompt: 'Tech professional connecting various tools and APIs, multiple devices and screens on desk showing integrations, modern collaborative workspace, photorealistic' },
      { title: 'Observability for Agentic AI', prompt: 'Data analyst monitoring dashboards with metrics and logs on multiple screens, serious focused expression, professional monitoring station setup, photorealistic' },
      { title: 'Prompt Engineering for Agentic AI', prompt: 'Creative professional writing and refining text prompts on laptop, notebooks with examples visible, bright inspiring workspace with natural elements, photorealistic lifestyle' },
      { title: 'Error Handling and Recovery in Agentic AI Systems', prompt: 'IT professional troubleshooting system errors, looking at error logs and recovery procedures, problem-solving atmosphere, modern tech workspace, photorealistic' },
      { title: 'Context Window Management in Agentic AI', prompt: 'Professional managing multiple document windows and context on large ultrawide monitor, organized workspace with minimal distractions, photorealistic lifestyle' },
      { title: 'Scaling Agentic AI: From Prototype to Production', prompt: 'Business team presenting growth charts and scaling strategies on large presentation screen, celebrating success, modern conference room setting, photorealistic' },
      { title: 'Use Cases: Where Agentic AI and Traditional AI Each Excel', prompt: 'Diverse group discussing different business use cases around conference table, pointing at case study documents, collaborative professional meeting, photorealistic' },
      { title: 'Migration Guide: From Traditional AI to Agentic AI Systems', prompt: 'Project manager planning migration strategy on whiteboard with timeline and phases, team members listening, professional planning session, photorealistic lifestyle' },
      { title: 'ROI Comparison: Agentic AI vs Traditional AI Business Value', prompt: 'CFO presenting ROI analysis and financial returns on presentation screen to executives, professional business meeting room, photorealistic' },
      { title: 'Future-Proofing with Agentic AI', prompt: 'Visionary leader looking at futuristic technology trends on transparent digital display, modern forward-thinking office environment, photorealistic lifestyle' },
      { title: 'Limitations of Agentic AI', prompt: 'Thoughtful professional reviewing limitations and constraints document with concerned expression, realistic assessment meeting, honest business discussion, photorealistic' },
      { title: 'Skills Transition: From Traditional AI to Agentic AI Development', prompt: 'Developer learning new skills from training materials and online courses, upskilling at modern workspace, growth mindset atmosphere, photorealistic lifestyle' }
    ];
    
    const results = [];
    
    for (const post of blogPosts) {
      const imageResult = await base44.asServiceRole.integrations.Core.GenerateImage({
        prompt: post.prompt
      });
      
      results.push({
        title: post.title,
        imageUrl: imageResult.url
      });
    }
    
    return Response.json({ success: true, images: results });
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});