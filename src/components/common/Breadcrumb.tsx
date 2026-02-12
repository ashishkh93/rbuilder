import { Link } from "react-router-dom";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="rb:text-sm rb:text-gray-600 rb:mb-6">
      <ol className="rb:flex rb:items-center rb:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className="rb:flex rb:items-center rb:space-x-2 rb:cursor-pointer"
            >
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="rb:text-xs rb:text-black! rb:underline! rb:underline-offset-2 hover:rb:text-black rb:transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="rb:text-gray-400 rb:font-medium rb:text-xs">{item.label}</span>
              )}

              {!isLast && <span className="rb:text-gray-400">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
