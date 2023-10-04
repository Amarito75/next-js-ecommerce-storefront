"use client";

import { Media } from "@/types";
import React, { useState } from "react";
import Button from "./ui/button";
import { LuPlus, LuX } from "react-icons/lu";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/icon-button";
import Filter from "@/app/(routes)/category/[categoryId]/components/filter";

interface MobileFiltersProps {
  medias: Media[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ medias }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <LuPlus size={20} />
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<LuX size={15} onClick={onClose} />} />
            </div>
            <div className="p-4">
              <Filter valueKey="mediaId" name="Medias" data={medias} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
