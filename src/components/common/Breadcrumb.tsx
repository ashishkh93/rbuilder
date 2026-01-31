import { Link } from "react-router-dom";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="text-xs text-black! underline! underline-offset-2 hover:text-black transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-400 font-medium text-xs">{item.label}</span>
              )}

              {!isLast && <span className="text-gray-400">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
