type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <h1>Header</h1>
      {children}
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
