import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { batch = 0 } = await req.json();
    
    const allPosts = [
      { title: 'Agentic AI vs Traditional AI', prompt: 'Professional diverse team comparing two different technology approaches on whiteboards in bright modern office, collaborative discussion, natural daylight, photorealistic business lifestyle' },
      { title: 'Decision Framework', prompt: 'Business executive at decision flowchart on glass wall, choosing between options, modern corporate office with city view, professional photorealistic lifestyle' },
      { title: 'Rule-Based Systems', prompt: 'Professional analyzing rules and logic on notebooks versus digital screens, contrasting methods, clean workspace, photorealistic business lifestyle' },
      { title: 'Cost Analysis', prompt: 'Financial analyst reviewing spreadsheets and budget reports at desk, charts visible, professional business environment with natural lighting, photorealistic lifestyle' },
      { title: 'Performance Benchmarks', prompt: 'Tech professional running benchmarks on laptop showing metrics and graphs, focused, modern minimalist office workspace, photorealistic lifestyle' },
      { title: 'Architecture Differences', prompt: 'Software architect drawing system diagrams on large monitor, data flow visible, bright contemporary office, photorealistic business lifestyle' },
      { title: 'Architecture Patterns', prompt: 'Developer working on architecture patterns on multiple screens, code visible, workspace with plants, natural light, photorealistic lifestyle' },
      { title: 'Memory Management', prompt: 'Professional organizing data storage systems, filing and digital screens showing memory organization, modern office, photorealistic business lifestyle' },
      { title: 'Tool Integration', prompt: 'Tech professional connecting tools and APIs, multiple devices showing integrations, modern collaborative workspace, photorealistic lifestyle' },
      { title: 'Observability', prompt: 'Data analyst monitoring dashboards with metrics on multiple screens, focused expression, professional monitoring station, photorealistic lifestyle' },
      { title: 'Prompt Engineering', prompt: 'Creative professional writing prompts on laptop, notebooks with examples, bright inspiring workspace with plants, photorealistic business lifestyle' },
      { title: 'Error Handling', prompt: 'IT professional troubleshooting errors, error logs visible, problem-solving atmosphere, modern tech workspace, photorealistic lifestyle' },
      { title: 'Context Management', prompt: 'Professional managing multiple windows on ultrawide monitor, organized workspace minimal distractions, photorealistic business lifestyle' },
      { title: 'Scaling Production', prompt: 'Business team presenting growth charts and scaling strategies on screen, celebrating, modern conference room, photorealistic lifestyle' },
      { title: 'Use Cases', prompt: 'Diverse group discussing business use cases around table, case study documents, collaborative professional meeting, photorealistic lifestyle' }
    ];
    
    const batchSize = 3;
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