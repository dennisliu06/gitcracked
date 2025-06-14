import Footer from "../../../components/Footer";
import NavBarPublic from "./NavBarPublic";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <NavBarPublic />
      <main>{children}</main>
      <Footer />
    </>
  );
}
