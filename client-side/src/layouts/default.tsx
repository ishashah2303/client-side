
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen" style={{ backgroundColor: '#A3FFD6' }}>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 flex-grow" style={{ backgroundColor: '#A3FFD6' }}>
        {children}
      </main>
    </div>
  );
}
