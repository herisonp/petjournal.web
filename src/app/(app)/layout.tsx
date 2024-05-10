import { BottomTab } from './components/BottomTab';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full p-4 pb-16 flex flex-col">
      {children}
      <BottomTab />
    </div>
  );
}
