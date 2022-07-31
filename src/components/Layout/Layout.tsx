import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col selection:bg-indigo-500">
      <Header />

      <main className="relative flex grow justify-center bg-slate-300">
        <div className="container px-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
