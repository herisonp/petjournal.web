"use client";

import { Breed } from "@/types/PetsTypes";
import * as Ariakit from "@ariakit/react";
import { ScrollArea } from "../ScrollArea";
import { ChevronDown } from "lucide-react";

interface SearchInputProps {
  placeholder: string;
  items: Breed[];
}

function SearchInput({placeholder, items}: SearchInputProps) {
  return (
    <Ariakit.ComboboxProvider>
      <div className="w-full max-w-[327px] flex relative justify-center items-center">
        <Ariakit.Combobox placeholder={placeholder} className="w-full h-10 p-2 border border-[#B2B2B2] border-dashed rounded-2xl text-[#2E2E2E] focus:border-[#B78AF7] focus:shadow-custom-select" />
        <ChevronDown className="absolute right-2" size={18} color="#2E2E2E" />
      </div>
      <Ariakit.ComboboxPopover gutter={8} sameWidth className="border rounded-2xl p-2">
        <ScrollArea className="h-[150px]">
          {items.map((item) => (
            <Ariakit.ComboboxItem
              className="p-2 font-normal text-sm" 
              value={item.name} 
              key={item.id}
            >
              {item.name}
            </Ariakit.ComboboxItem>
          ))}
         </ScrollArea>
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
  );
}

export { SearchInput };