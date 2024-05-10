export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen flex items-center flex-col p-4 pb-16`}>
      {children}
    </div>
  );
}
