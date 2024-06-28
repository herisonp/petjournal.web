"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/utils/twmerge"
import { Command, CommandEmpty,CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ComboBox/Command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ComboBox/Popover"

interface ComboBoxProps {
  placeholder: string;
  items: {value: string; label: string;}[],
}

export function ComboBox({placeholder, items}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-expanded={open}
          className="w-[327px] flex gap-2 justify-between items-center outline-0 text-[#2E2E2E] text-sm font-normal py-[9.5px] px-2 border border-[#B2B2B2] border-dashed rounded-xl"
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : `${placeholder}`}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" color="#2E2E2E"/>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
