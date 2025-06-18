import NavBar from "@/components/AppNavBar";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <main className="">{children}</main>
    </div>
  );
}
