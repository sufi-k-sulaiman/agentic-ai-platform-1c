import BlogCategoryHub from '@/components/blog/BlogCategoryHub';

export default function BlogCategoryGenerativeAI() {
  return (
    <BlogCategoryHub
      category="Generative AI"
      pageName="BlogCategoryGenerativeAI"
      title="Generative AI: Guides & Resources"
      description="Learn about generative AI from fundamentals to production. 12 articles on LLMs, fine-tuning, RAG, image generation, code generation, ethics, and future trends."
      intro="Generative AI is the foundation of modern AI applications—from large language models to image and code generation. This topic cluster covers the fundamentals, comparisons with traditional AI, fine-tuning, RAG, ethics, business applications, scaling, and future trends. Whether you're building with GPT, Claude, or open-source models, these articles will guide your journey."
      keywords={['generative AI', 'LLMs', 'fine-tuning', 'RAG', 'AI image generation', 'AI code generation', 'generative AI ethics']}
    />
  );
}