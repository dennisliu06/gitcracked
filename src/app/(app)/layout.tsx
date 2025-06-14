import NavBar from "@/components/AppNavBar";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
      <NavBar />
      <main className="">{children}</main>
    </div>
  );
}
