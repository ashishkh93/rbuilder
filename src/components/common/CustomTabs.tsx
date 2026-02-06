import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const CustomTabs = <T extends string>({
  value,
  onChange,
  items,
  className,
  heightClass = "h-10 md:h-14",
}: CustomTabsProps<T>) => {
  const isFirstActive = value === items[0].value;

  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as T)}>
      <TabsList
        className={cn(
          `flex relative isolate rounded-md bg-customGray-50 border border-borders p-0 items-stretch`,
          heightClass,
          className
        )}
      >
        {/* Active background slider */}
        <div
          className={cn(
            `absolute w-1/2 top-0 bottom-0 pointer-events-none bg-white ring-1 md:ring-2 ring-black transition-all duration-300 rounded-md`,
            isFirstActive ? "left-0" : "left-1/2"
          )}
        />

        {items.map((item) => {
          const isActive = value === item.value;

          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                `relative z-10 flex items-center justify-center gap-2 w-1/2 h-full px-4 rounded-md text-sm leading-none text-black bg-transparent before:absolute before:inset-0 transition duration-300 data-[state=active]:bg-transparent data-[state=active]:shadow-none cursor-pointer`,
                isActive ? "before:invisible" : "before:visible"
              )}
            >
              {item.icon && (
                <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
                  {item.icon}
                </span>
              )}

              <span className="whitespace-nowrap">{item.label}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

export default CustomTabs;
