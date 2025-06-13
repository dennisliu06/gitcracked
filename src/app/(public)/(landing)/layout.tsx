import Footer from "../../../components/Footer";
import NavBar from "../../../components/navbar";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
