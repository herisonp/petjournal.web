"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ComboBox/Command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ComboBox/Popover"
import { ScrollArea } from "../ScrollArea"
import { Input } from "../Inputs/Input"

interface ComboBoxProps {
  placeholder: string;
  items: { id: string; name: string; }[];
}

export function ComboBox({ placeholder, items }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    setInputValue(items.find(item => item.name === currentValue)?.name || "")
    setOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full max-w-[327px]">
        <div className="flex relative justify-between items-center">
          <Input
            type="text"
            variant="secondary"
            aria-expanded={open}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`rounded-2xl text-sm ${open ? "border-solid border border-[#B78AF7] shadow-custom-select" : ""}`}
          />
          <ChevronDown className="absolute right-2" size={18} color="#2E2E2E"/>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <CommandEmpty>Não encontrado.</CommandEmpty>
            <ScrollArea className="h-[150px]">
              <CommandGroup>
                {items.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                    className="pl-1"
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
