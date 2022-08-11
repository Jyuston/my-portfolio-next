import { Item } from "./MenuDropdown";
import { allProjects } from "contentlayer/generated";
import MenuDropdown from "./MenuDropdown";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Header: React.FC = () => {
  const dropdownItems = allProjects.map<Item>(
    ({ description, url, title }) => ({
      description,
      title,
      url,
    })
  );

  return (
    <div className="bg-slate-200  selection:bg-indigo-500 selection:text-white">
      <div className="container flex flex-col items-center justify-between px-4 md:flex-row">
        <Link href="/">
          <a className="py-5 text-3xl font-bold text-gray-400 transition delay-100 duration-300 ease-in-out hover:scale-110 hover:text-indigo-400">
            Justin Y.
          </a>
        </Link>

        <div className="flex flex-row gap-4 py-4">
          <MenuButton url="/">Home</MenuButton>
          <MenuDropdown dropdownItems={dropdownItems}>Projects</MenuDropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
