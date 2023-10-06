import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab
      className={
        "relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-beige border border-black"
      }
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden">
            <Image
              src={image.url}
              alt={"product-image"}
              fill
              className="object-cover object-center border border-black"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
