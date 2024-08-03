export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen flex items-center flex-col px-4 py-6`}>
      {children}
    </div>
  );
}
