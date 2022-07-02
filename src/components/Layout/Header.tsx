const Header: React.FC = () => {
  return (
    <div className="flex w-screen bg-slate-200 justify-center p-1">
      <img
        className="inline-block h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="w-1/2 flex justify-around items-center">
        <a className="">About</a>
        <a className="">Projects</a>
        <a className="">Contact</a>
      </div>
    </div>
  );
};

export default Header;
