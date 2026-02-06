import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CustomAccordionItem = ({
  value,
  title,
  icon,
  children,
  defaultOpen = false,
}: StoneAccordionItemProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? value : undefined}
      className="w-full"
    >
      <AccordionItem
        value={value}
        className="rounded-xl"
      >
        {/* HEADER */}
        <AccordionTrigger className="flex items-center justify-between rounded-t-2xl bg-secondary px-5 py-4 text-left hover:no-underline cursor-pointer">
          <div className="flex items-center gap-3 text-sm font-medium text-black">
            {icon}
            {title}
          </div>
        </AccordionTrigger>

        {/* BODY */}
        <AccordionContent className="bg-white px-5 py-6 rounded-b-xl!">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordionItem;
