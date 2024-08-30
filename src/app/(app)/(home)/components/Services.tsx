import { ServicesItem } from './ServicesItem';
import { IconCalendar } from '@/components/icons/IconCalendar';
import { IconSearchService } from '@/components/icons/IconSearchService';
import { IconRegisterVaccine } from '@/components/icons/IconRegisterVaccine';
import { IconMedicalDrops } from '@/components/icons/IconMedicalDrops';

const servicesMock = [
  {
    href: '#',
    title: 'Agenda',
    icon: IconCalendar,
    className: 'bg-custom-blue',
  },
  {
    href: '#',
    title: 'Localizar Serviços',
    icon: IconSearchService,
    className: 'bg-custom-purple',
  },
  {
    href: '#',
    title: 'Registro de Vacinas',
    icon: IconRegisterVaccine,
    className: 'bg-custom-cyan',
  },
  {
    href: '#',
    title: 'Registro de Vermífugos',
    icon: IconMedicalDrops,
    className: 'bg-custom-pink',
  },
];

export function Services() {
  return (
    <ul className='grid grid-cols-2 grid-rows-2 gap-4'>
      {servicesMock.map(service => (
        <ServicesItem
          key={service.title}
          href={service.href}
          title={service.title}
          className={service.className}
        >
          <service.icon size={75} />
        </ServicesItem>
      ))}
    </ul>
  );
}
