import { BottomTab } from './components/BottomTab';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen w-full pb-32 flex flex-col'>
      {children}
      <BottomTab />
    </div>
  );
}
