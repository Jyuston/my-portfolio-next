import { Item } from "./MenuDropdown";
import { allProjects } from "contentlayer/generated";
import MenuDropdown from "./MenuDropdown";
import MenuButton from "./MenuButton";

const Header: React.FC = () => {
  const dropdownItems = allProjects.map<Item>(
    ({ description, url, title }) => ({
      description,
      title,
      url,
    })
  );

  return (
    <div className="flex w-screen bg-slate-200 justify-center">
      <div className="flex items-center justify-between container">
        <div className="font-bold text-indigo-500/80 text-2xl p-5">Jyuston</div>
        <div className="flex flex-row gap-4">
          <MenuButton url="/">Home</MenuButton>
          <MenuButton url="/about">About</MenuButton>
          <MenuDropdown dropdownItems={dropdownItems}>Projects</MenuDropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
