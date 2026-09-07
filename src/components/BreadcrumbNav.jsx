import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function BreadcrumbNav({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm leading-none text-gray-600 mb-8">
      <Link 
        to={createPageUrl('Home')} 
        className="flex items-center gap-1 hover:text-[#8B2EE5] transition-colors"
      >
        <Home className="w-4 h-4 shrink-0" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium leading-none">{item.label}</span>
          ) : (
            <Link 
              to={createPageUrl(item.page)} 
              className="flex items-center hover:text-[#8B2EE5] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}