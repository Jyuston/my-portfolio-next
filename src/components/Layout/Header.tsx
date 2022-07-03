import MenuItem from "./MenuItem";

const Header: React.FC = () => {
  return (
    <div className="flex w-screen bg-slate-200 justify-center">
      <div className="w-1/2 flex justify-around items-center">
        <MenuItem href="/about">About</MenuItem>

        <MenuItem
          dropdownItems={[
            { description: "yo", name: "Hey", href: "/home" },
            { description: "Pro", name: "Poo", href: "/Poo" },
          ]}
          href="/home"
        >
          Projects
        </MenuItem>
      </div>
    </div>
  );
};

export default Header;
