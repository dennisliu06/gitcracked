import Footer from "../_components/Footer";
import NavBar from "../_components/navbar";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
