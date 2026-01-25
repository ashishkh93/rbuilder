import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <ChevronRight className="w-4 h-4" />,
  showHome = true,
  className = '',
}) => {
  const allItems = showHome
    ? [{ label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> }, ...items]
    : items;

  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        const isActive = isLast;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-muted mx-2 flex-shrink-0">
                {separator}
              </span>
            )}
            
            <div className="flex items-center space-x-2">
              {item.icon && (
                <span className={`flex-shrink-0 ${isActive ? 'text-primary' : 'text-muted'}`}>
                  {item.icon}
                </span>
              )}
              
              {item.href && !isActive ? (
                <a
                  href={item.href}
                  className="text-muted hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`font-semibold ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;