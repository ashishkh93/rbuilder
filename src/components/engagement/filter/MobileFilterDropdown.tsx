// src/components/common/FilterDropdown.tsx

import { memo } from "react";
import { Drawer, DrawerContent } from "../../ui/drawer";
import FiltersSheet from "./FiltersSheet";

const MobileFilterDropdown = ({ open, setOpen }: MobileFilterDropdownProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="p-0 max-h-[90vh] rounded-t-2xl">
        <FiltersSheet />
      </DrawerContent>
    </Drawer>
  );
};

export default memo(MobileFilterDropdown);
