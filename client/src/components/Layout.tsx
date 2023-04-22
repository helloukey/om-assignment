import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="h-full min-h-full flex flex-col">
      <Navbar />
      <main className="w-full max-w-6xl px-4 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
