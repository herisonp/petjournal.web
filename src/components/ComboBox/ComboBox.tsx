"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ComboBox/Command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ComboBox/Popover"
import { ScrollArea } from "../ScrollArea"
import { Input } from "../Inputs/Input"

interface ComboBoxProps {
  placeholder: string;
  items: { value: string; label: string; }[],
}

export function ComboBox({ placeholder, items }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [inputValue, setInputValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue)
    setInputValue(currentValue === value ? "" : items.find(item => item.value === currentValue)?.label || "")
    setOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-full max-w-[327px] flex relative justify-between items-center">
          <Input
            type="text"
            variant="secondary"
            aria-expanded={open}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="rounded-2xl text-sm"
            onClick={() => setOpen(true)}
          />
          <ChevronDown className="absolute right-2" size={18} color="#2E2E2E"/>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[327px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Não encontrado.</CommandEmpty>
            <ScrollArea className="h-[150px] mr-2">
              <CommandGroup>
                {items.filter(item => item.label.toLowerCase().includes(inputValue.toLowerCase())).map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                    className="px-3"
                  >
                    {item.label}
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
