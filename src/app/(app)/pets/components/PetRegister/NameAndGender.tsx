import { ToggleGroup, ToggleGroupItem } from '@/components/ToggleGroup';
import { IconFemale } from '@/components/icons/IconFemale';
import { IconMale } from '@/components/icons/IconMale';

export function NameAndGender() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <span className="text-lg font-medium text-left text-studio-600">
          Uau!
        </span>
        <h3 className="text-lg font-medium text-left text-studio-600">
          Ficamos muito felizes em receber mais um {'{specie}'} em nossa
          comunidade!
        </h3>
      </div>
      <h4 className="text-center mt-4 font-semibold">
        Qual o nome do seu companheiro?
      </h4>
      <label className="flex flex-col gap-2">
        <span>Nome:</span>
        <input
          type="text"
          placeholder="Nome"
          required
          className="px-2 py-4 bg-white border border-gray-500 border-dashed rounded-xl focus:border-studio-600 focus:boder-dashed focus:border focus:outline-none"
        />
        <span className="text-gray-400">*Campo obrigatório</span>
      </label>
      <ToggleGroup type="single" className="gap-4 mt-8">
        <ToggleGroupItem
          value="male"
          className="flex flex-col gap-1 w-[120px] h-[120px] p-5 border-2 border-dashed border-gray-400 rounded-2xl text-gray-700 hover:bg-transparent hover:border-studio-600 hover:text-gray-700 data-[state=on]:bg-transparent data-[state=on]:border-solid data-[state=on]:border-studio-600 data-[state=on]:text-gray-700"
        >
          <IconMale size={60} />
          <span>Macho</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="female"
          className="flex flex-col gap-1 w-[120px] h-[120px] p-5 border-2 border-dashed border-gray-400 rounded-2xl text-gray-700 hover:bg-transparent hover:border-studio-600 hover:text-gray-700 data-[state=on]:bg-transparent data-[state=on]:border-solid data-[state=on]:border-studio-600 data-[state=on]:text-gray-700"
        >
          <IconFemale size={60} />
          <span>Fêmea</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
