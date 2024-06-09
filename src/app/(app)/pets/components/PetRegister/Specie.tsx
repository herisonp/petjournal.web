import { ToggleGroup, ToggleGroupItem } from '@/components/ToggleGroup';
import { IconCat } from '@/components/icons/IconCat';
import { IconDog } from '@/components/icons/IconDog';

export function Specie() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-medium text-center text-custom-purple">
        Olá, <span className="text-custom-pink">{'{Usuário}'}</span>,
        gostaríamos de saber qual a espécie do seu Pet:
      </h3>

      <ToggleGroup type="single" className="gap-4 mt-8">
        <ToggleGroupItem
          value="dog"
          className="flex flex-col gap-1 w-[100px] h-[100px] p-5 border-2 border-gray-400 text-gray-400 hover:bg-transparent hover:border-custom-purple hover:text-custom-purple data-[state=on]:bg-transparent data-[state=on]:border-custom-purple data-[state=on]:text-custom-purple"
        >
          <IconDog size={60} />
          <span>Cachorro</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="cat"
          className="flex flex-col gap-1 w-[100px] h-[100px] p-5 border-2 border-gray-400 text-gray-400 hover:bg-transparent hover:border-custom-purple hover:text-custom-purple data-[state=on]:bg-transparent data-[state=on]:border-custom-purple data-[state=on]:text-custom-purple"
        >
          <IconCat size={60} />
          <span>Gato</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
