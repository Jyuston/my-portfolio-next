import MenuItem, { Item } from "./MenuDropdown";
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
      <div className="w-1/2 flex justify-around items-center">
        <MenuButton url="/">Home</MenuButton>
        <MenuButton url="/about">About</MenuButton>
        <MenuDropdown dropdownItems={dropdownItems}>Projects</MenuDropdown>
      </div>
    </div>
  );
};

export default Header;
