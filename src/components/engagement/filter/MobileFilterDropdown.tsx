import { memo } from "react";
import { Drawer, DrawerContent } from "../../ui/drawer";
import FiltersSheet from "./FiltersSheet";

const MobileFilterDropdown = ({ open, setOpen }: MobileFilterDropdownProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="rb:p-0 rb:max-h-[90vh] rb:rounded-t-2xl">
        <FiltersSheet />
      </DrawerContent>
    </Drawer>
  );
};

export default memo(MobileFilterDropdown);
