import React from 'react';

interface ICheckBox {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CheckBox({ remember, setRemember }: ICheckBox) {
  return (
    <label className="flex items-center justify-center gap-1">
      <input
        type="checkbox"
        checked={remember}
        onChange={(event) => setRemember(event.target.checked)}
        className="appearance-none"
      />
      <span
        className='flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#7C54A7]'
      >
        <span
          className={`absolute w-[6px] h-[6px] rounded-full ${
            remember ? 'bg-[#7C54A7]' : ''
          }`}
        />
      </span>
      <span className="text-xs font-medium">Eu concordo com a política de privacidade</span>
    </label>
  );
};
