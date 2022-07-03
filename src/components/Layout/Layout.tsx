import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="bg-slate-300 w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
