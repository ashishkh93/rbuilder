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
      className="rb:w-full rb:m-0!"
      style={{ margin: 0 }}
    >
      <AccordionItem
        value={value}
        className="rb:rounded-xl"
      >
        {/* HEADER */}
        <AccordionTrigger className="rb:flex rb:items-center rb:justify-between rb:rounded-t-2xl rb:bg-secondary rb:px-5 rb:py-4 rb:text-left hover:rb:no-underline rb:cursor-pointer">
          <div className="rb:flex rb:items-center rb:gap-3 rb:text-sm rb:font-medium rb:text-black">
            {icon}
            {title}
          </div>
        </AccordionTrigger>

        {/* BODY */}
        <AccordionContent className="rb:bg-white rb:px-5 rb:py-3 rb:rounded-b-xl!">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordionItem;
