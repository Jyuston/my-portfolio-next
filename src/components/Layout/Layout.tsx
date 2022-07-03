import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-slate-300 grow">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
