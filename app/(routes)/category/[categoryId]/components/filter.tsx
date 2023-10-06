"use client";

import { Media } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import qs from "query-string";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { Disclosure } from "@headlessui/react";
import { LuChevronDown } from "react-icons/lu";
import { Transition } from "@headlessui/react";

interface FilterProps {
  data: Media[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isChevronRotated, setIsChevronRotated] = useState(false);

  const toggleChevronRotation = () => {
    setIsChevronRotated(!isChevronRotated);
  };

  const selectedValue = searchParams.get(valueKey);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div>
      <Disclosure>
        <Disclosure.Button
          className="flex items-center py-2"
          onClick={toggleChevronRotation}
        >
          <div className="flex justify-between items-center gap-x-24">
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <LuChevronDown
              className={`w-4 h-4 ${isChevronRotated ? "rotate-180" : ""}`}
            />
          </div>
        </Disclosure.Button>
        <hr className="py-4 max-w-[220px]" />
        {data.map((filter) => (
          <div key={filter.id} className="items-center">
            <Disclosure.Panel>
              {/* <Button
                  className={cn(
                    "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                    selectedValue === filter.id && "bg-black text-white"
                  )}
                  onClick={() => onClick(filter.id)}
                > */}
              <div className="py-2">
                <h3
                  className={cn(
                    "hover:text-jaune cursor-pointer transition-colors",
                    selectedValue === filter.id && "text-jaune underline"
                  )}
                  onClick={() => onClick(filter.id)}
                >
                  {filter.name}
                </h3>
              </div>
              {/* </Button> */}
            </Disclosure.Panel>
          </div>
        ))}
      </Disclosure>
    </div>
  );
};

export default Filter;
