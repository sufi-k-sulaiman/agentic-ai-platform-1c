import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { batch = 0 } = await req.json();
    
    const allPosts = [
      { title: 'Migration Guide', prompt: 'Project manager planning migration strategy on whiteboard with timeline, team listening, professional planning session, photorealistic lifestyle' },
      { title: 'ROI Comparison', prompt: 'CFO presenting ROI analysis on screen to executives, professional business meeting room, photorealistic lifestyle' },
      { title: 'Future-Proofing', prompt: 'Visionary leader looking at technology trends on transparent display, modern forward-thinking office, photorealistic lifestyle' },
      { title: 'Limitations', prompt: 'Thoughtful professional reviewing limitations document with concerned expression, honest business discussion, photorealistic lifestyle' },
      { title: 'Skills Transition', prompt: 'Developer learning new skills from training materials, upskilling at modern workspace, growth mindset, photorealistic lifestyle' },
      { title: 'Industry Adoption', prompt: 'Business analysts reviewing industry adoption trends on charts, market research meeting, photorealistic lifestyle' },
      { title: 'Security Comparison', prompt: 'Security officer reviewing risk profiles and security measures on dual monitors, professional cybersecurity workspace, photorealistic lifestyle' },
      { title: 'Generative AI Intro', prompt: 'Tech educator explaining AI concepts with visual diagrams on screen, engaging presentation, modern classroom, photorealistic lifestyle' },
      { title: 'Generative vs Traditional', prompt: 'Team comparing traditional and generative AI approaches on whiteboards, collaborative discussion, photorealistic lifestyle' },
      { title: 'LLM Guide', prompt: 'Data scientist working with large language models on laptop, code and outputs visible, research workspace, photorealistic lifestyle' },
      { title: 'Content Creation', prompt: 'Content creator using AI tools for writing on laptop, creative workspace with plants, inspiring atmosphere, photorealistic lifestyle' },
      { title: 'Code Generation', prompt: 'Software developer using AI code assistant, multiple screens showing code, modern development environment, photorealistic lifestyle' },
      { title: 'Image Generation', prompt: 'Designer working with AI image tools, creating visuals on tablet and monitor, creative studio space, photorealistic lifestyle' },
      { title: 'AI Ethics', prompt: 'Ethics committee discussing responsible AI in boardroom, serious professional discussion, diverse team, photorealistic lifestyle' },
      { title: 'Business Automation', prompt: 'Operations manager reviewing automated workflows on dashboard, business process improvement meeting, photorealistic lifestyle' },
      { title: 'Fine-Tuning', prompt: 'ML engineer fine-tuning AI models on workstation, training metrics visible on screens, technical workspace, photorealistic lifestyle' },
      { title: 'Future Trends', prompt: 'Futurist presenting AI trends and predictions on large screen, audience engaged, innovation conference, photorealistic lifestyle' },
      { title: 'Governance Intro', prompt: 'Compliance officer establishing governance framework, policy documents visible, professional regulatory environment, photorealistic lifestyle' },
      { title: 'Regulatory Compliance', prompt: 'Legal team reviewing regulatory requirements for AI, compliance documents on table, serious meeting, photorealistic lifestyle' },
      { title: 'Risk Management', prompt: 'Risk analyst assessing AI threats on risk matrix display, strategic planning session, photorealistic lifestyle' },
      { title: 'Security Privacy', prompt: 'Security expert implementing privacy controls, encryption and security measures visible, secure workspace, photorealistic lifestyle' },
      { title: 'Ethical Frameworks', prompt: 'Ethics board developing principles and frameworks, collaborative workshop setting, inclusive discussion, photorealistic lifestyle' },
      { title: 'Accountability', prompt: 'Audit team reviewing AI decision logs and accountability measures, thorough examination process, photorealistic lifestyle' },
      { title: 'Data Governance', prompt: 'Data steward managing information flows on screens, data classification visible, organized data center, photorealistic lifestyle' },
      { title: 'Monitoring', prompt: 'Operations team monitoring AI systems on dashboards, 24/7 operations center, professional monitoring setup, photorealistic lifestyle' },
      { title: 'Access Control', prompt: 'Security admin configuring permissions and access controls, identity management interface visible, photorealistic lifestyle' },
      { title: 'Compliance Frameworks', prompt: 'Compliance manager reviewing SOC 2 and ISO standards, certification documents visible, professional audit, photorealistic lifestyle' },
      { title: 'Governance Best Practices', prompt: 'Leadership team discussing governance best practices, strategy session, mature organization setting, photorealistic lifestyle' },
      { title: 'Governance Committee', prompt: 'AI governance committee in formal meeting, diverse executives discussing policies, boardroom setting, photorealistic lifestyle' },
      { title: 'Model Governance', prompt: 'MLOps engineer managing model versions and lifecycle, deployment pipeline visible, technical operations, photorealistic lifestyle' },
      { title: 'Vendor Management', prompt: 'Procurement team evaluating AI vendor contracts, due diligence review meeting, professional business setting, photorealistic lifestyle' },
      { title: 'AI Autonomy Intro', prompt: 'Researcher explaining autonomy levels with visual aids, educational presentation, modern lab environment, photorealistic lifestyle' },
      { title: 'Autonomy Levels', prompt: 'Engineer demonstrating six levels of AI autonomy on interactive display, technical demonstration, photorealistic lifestyle' },
      { title: 'Autonomous Decisions', prompt: 'AI specialist analyzing autonomous decision-making processes on screens, deep technical analysis, photorealistic lifestyle' },
      { title: 'Building Autonomous', prompt: 'Development team architecting autonomous systems, whiteboard with architecture diagrams, collaborative build session, photorealistic lifestyle' },
      { title: 'Autonomy vs Oversight', prompt: 'Manager balancing automation and human oversight, decision framework visible, strategic planning, photorealistic lifestyle' },
      { title: 'Autonomous Applications', prompt: 'Product manager showcasing autonomous AI applications in demo, real-world use cases, presentation setting, photorealistic lifestyle' },
      { title: 'Autonomy Challenges', prompt: 'Problem-solving team addressing autonomy challenges, brainstorming solutions on whiteboards, intensive workshop, photorealistic lifestyle' },
      { title: 'Autonomy Future', prompt: 'Visionary presenting future of autonomous AI, futuristic concepts on displays, innovation summit, photorealistic lifestyle' }
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