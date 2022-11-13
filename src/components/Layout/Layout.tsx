import { useState } from "react";
import classNames from "src/utils/classNames";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex h-screen flex-col selection:bg-indigo-500 selection:text-white`}
    >
      <Header darkMode={darkMode} toggleDarkMode={setDarkMode} />
      <main className="relative flex grow justify-center bg-slate-300 transition duration-300 dark:bg-slate-700">
        <div className="container px-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
