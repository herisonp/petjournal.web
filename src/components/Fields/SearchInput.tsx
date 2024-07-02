"use client";

import React, { useState } from "react";
import { Breed } from "@/types/PetsTypes";
import * as Ariakit from "@ariakit/react";
import { ScrollArea } from "../ScrollArea";
import { ChevronDown } from "lucide-react";
import { IconErrorCircle } from "../icons/IconErrorCircle";
import { cn } from "@/utils/twmerge";

interface SearchInputProps {
  placeholder: string;
  items: Breed[];
  className?: string;
  error?: boolean;
}

const searchVariants = {
  normal: `w-full h-10 p-2 border border-[#B2B2B2] border-dashed rounded-2xl bg-white text-[#2E2E2E] focus:outline-none focus:border-solid focus:border-[#B78AF7] focus:shadow-custom-select`,
  error: `w-full h-10 p-2 border border-[#FF917A] border-solid rounded-2xl bg-white text-[#2E2E2E] focus:outline-none focus:border-solid focus:border-[#B78AF7] focus:shadow-custom-select`,
};

function SearchInput({ placeholder, items, className, error = false }: SearchInputProps) {
  const [value, setValue] = useState("");

  const foundItem = items.find((item) => item.name.toLowerCase() === value.toLowerCase());

  const filteredItems = foundItem ? items : items.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
  };

  return (
    <Ariakit.ComboboxProvider>
      <div className={cn("w-full flex justify-center items-center", className)}>
        <div className="w-full flex relative justify-center items-center">
          <Ariakit.Combobox
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={error ? searchVariants.error : searchVariants.normal}
          />
          {error ? <IconErrorCircle className="absolute right-2 pointer-events-none" size={20} /> : <ChevronDown className="absolute right-2 pointer-events-none" size={18} color="#2E2E2E" />}
        </div>
          <Ariakit.ComboboxPopover
            gutter={8}
            sameWidth
            className="border border-[#B78AF7] shadow-custom-select rounded-2xl p-2 bg-white"
          >
            <ScrollArea className="h-[150px]">
              {filteredItems.map((item) => (
                <Ariakit.ComboboxItem
                  key={item.id}
                  value={item.name}
                  className="p-2 font-normal text-sm"
                  onClick={() => handleSelect(item.name)}
                >
                  {item.name}
                </Ariakit.ComboboxItem>
              ))}
            </ScrollArea>
          </Ariakit.ComboboxPopover>
      </div>
    </Ariakit.ComboboxProvider>
  );
}

export { SearchInput };
