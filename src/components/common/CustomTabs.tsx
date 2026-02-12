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
          `rb:flex rb:relative rb:isolate rb:rounded-sm rb:bg-customGray-50 rb:border rb:border-borders rb:p-0 rb:items-stretch`,
          heightClass,
          className
        )}
      >
        {/* Active background slider */}
        <div
          className={cn(
            `rb:absolute rb:w-1/2 rb:top-0 rb:bottom-0 rb:pointer-events-none rb:bg-white rb:ring-1 md:rb:ring-2 rb:ring-black rb:transition-all rb:duration-300 rb:rounded-sm`,
            isFirstActive ? "rb:left-0" : "rb:left-1/2"
          )}
        />

        {items.map((item) => {
          const isActive = value === item.value;

          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                `rb:relative rb:z-10 rb:flex rb:items-center rb:justify-center rb:gap-2 rb:w-1/2 rb:h-full rb:px-4 rb:rounded-sm rb:text-sm rb:leading-none rb:text-black rb:bg-transparent rb:before:absolute rb:before:inset-0 rb:transition rb:duration-300 rb:data-[state=active]:rb:bg-transparent rb:data-[state=active]:rb:shadow-none rb:cursor-pointer`,
                isActive ? "rb:before:invisible" : "rb:before:visible"
              )}
            >
              {item.icon && (
                <span className="rb:flex rb:items-center rb:justify-center rb:w-5 rb:h-5 md:rb:w-6 md:rb:h-6 rb:shrink-0">
                  {item.icon}
                </span>
              )}

              <span className="rb:whitespace-nowrap">{item.label}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

export default CustomTabs;
