import React from 'react';
import { Link } from 'react-router-dom';
import { getKeywordIndex } from '@/lib/seoConfig';

/**
 * InternalLinker - Auto-links keywords in text content to relevant pages.
 * 
 * Usage:
 *   <InternalLinker currentPage="AgenticAI">
 *     Learn about agentic AI and enterprise ERP solutions.
 *   </InternalLinker>
 * 
 * This component scans its text children for keywords registered in seoConfig.js
 * and wraps each match in a <Link> (which renders as <a href>) to the relevant page.
 * Keywords from the current page are not self-linked.
 * 
 * @param {string} currentPage - The pageName of the current page (to avoid self-linking)
 * @param {React.ReactNode} children - Text content to auto-link
 * @param {string} className - Optional class for the links
 */
export default function InternalLinker({ currentPage, children, className = '' }) {
  const keywordIndex = getKeywordIndex();
  // Filter out keywords that belong to the current page (no self-linking)
  const linkable = keywordIndex.filter(k => k.pageName !== currentPage);

  const linkClass = className || 'text-[#8B2EE5] hover:text-[#7325C4] underline decoration-[#8B2EE5]/30 hover:decoration-[#8B2EE5] font-medium transition-colors';

  function processText(text) {
    if (typeof text !== 'string') return text;

    // Build a regex that matches any keyword (case-insensitive, word-boundary)
    // We use a greedy approach: process longest keywords first
    let parts = [{ text, linked: false }];

    for (const entry of linkable) {
      const escaped = entry.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
      const newParts = [];

      for (const part of parts) {
        if (part.linked) {
          newParts.push(part);
          continue;
        }
        let lastIndex = 0;
        let match;
        const segments = [];
        while ((match = regex.exec(part.text)) !== null) {
          if (match.index > lastIndex) {
            segments.push({ text: part.text.slice(lastIndex, match.index), linked: false });
          }
          segments.push({ text: match[0], linked: true, url: entry.url, pageName: entry.pageName });
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < part.text.length) {
          segments.push({ text: part.text.slice(lastIndex), linked: false });
        }
        if (segments.length === 0) {
          newParts.push(part);
        } else {
          newParts.push(...segments);
        }
      }
      parts = newParts;
    }

    return parts.map((part, i) => {
      if (part.linked) {
        return (
          <Link key={i} to={part.url} className={linkClass}>
            {part.text}
          </Link>
        );
      }
      return <React.Fragment key={i}>{part.text}</React.Fragment>;
    });
  }

  function processChildren(nodes) {
    return React.Children.map(nodes, (node) => {
      if (typeof node === 'string') {
        return processText(node);
      }
      if (React.isValidElement(node)) {
        // Don't recurse into <a>, <Link>, <button>, or code/pre blocks
        const tag = node.type;
        if (tag === 'a' || tag === Link || tag === 'button' || node.props.className?.includes?.('no-link')) {
          return node;
        }
        const displayName = typeof tag === 'function' ? tag.displayName : tag;
        if (displayName === 'Link' || displayName === 'a') return node;
        if (node.props.children) {
          return React.cloneElement(node, {}, processChildren(node.props.children));
        }
      }
      return node;
    });
  }

  return <>{processChildren(children)}</>;
}