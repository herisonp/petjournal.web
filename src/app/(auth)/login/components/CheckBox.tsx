import { Label } from '@/components/Label';
import React from 'react';

interface ICheckBox {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CheckBox({ remember, setRemember }: ICheckBox) {
  return (
    <Label htmlFor='checkbox' className="flex items-center">
      <input
        type="checkbox"
        id='checkbox'
        checked={remember}
        onChange={(event) => setRemember(event.target.checked)}
        className="appearance-none"
      />
      <span
        className='flex items-center justify-center mr-2 w-4 h-4 rounded-full border-2 border-studio-600'
      >
        <span
          className={`absolute w-[6px] h-[6px] rounded-full ${
            remember ? 'bg-studio-600' : ''
          }`}
        />
      </span>
      <span className="text-xs font-medium">Lembrar</span>
    </Label>
  );
};
