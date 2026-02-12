import { Separator } from "@/components/ui/separator";
import { Plus, X } from "lucide-react";

const SectionSeparator = ({
  label,
  className = "",
  open,
  onToggle,
}: SectionSeparatorProps) => {
  return (
    <div className={`rb:flex rb:items-center rb:w-full rb:gap-2 ${className}`}>
      <Separator className="rb:flex-1 rb:bg-border" />

      <button
        type="button"
        onClick={onToggle}
        className="rb:flex rb:items-center rb:gap-1 rb:text-xs rb:font-medium rb:text-muted-foreground rb:whitespace-nowrap rb:transition-colors rb:duration-200 hover:rb:text-foreground rb:cursor-pointer"
      >
        {label}

        {/* Icon wrapper to keep size stable */}
        <span className="rb:relative rb:inline-flex rb:items-center rb:justify-center rb:w-4 rb:h-4 rb:mt-0.5">
          {/* PLUS */}
          <Plus
            className={`rb:absolute rb:h-3 rb:w-3 rb:transition-all rb:duration-200 rb:ease-in-out ${open ? "rb:rotate-90 rb:opacity-0" : "rb:rotate-0 rb:opacity-100"}`}
          />

          {/* CLOSE */}
          <X
            className={`rb:absolute rb:h-3 rb:w-3 rb:transition-all rb:duration-200 rb:ease-in-out ${open ? "rb:rotate-0 rb:opacity-100" : "rb:-rotate-90 rb:opacity-0"}`}
          />
        </span>
      </button>

      <Separator className="rb:flex-1 rb:bg-border" />
    </div>
  );
};

export default SectionSeparator;
