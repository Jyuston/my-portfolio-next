import { Switch } from "@headlessui/react";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown, { Item } from "./MenuDropdown";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const dropdownItems = allProjects.map<Item>(
    ({ description, url, title }) => ({
      description,
      title,
      url,
    })
  );

  const router = useRouter();

  return (
    <div className="bg-slate-200 transition duration-300 dark:bg-slate-800/95">
      <div className="container flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex gap-4 py-5 md:gap-7">
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={`${darkMode ? "bg-slate-700" : "bg-amber-100"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <Link href="/">
            <a className="text-3xl font-bold text-gray-400 transition delay-100 duration-300 ease-in-out will-change-transform hover:scale-110 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-400">
              Justin Y.
            </a>
          </Link>
        </div>

        <div className="flex flex-row gap-4 py-4">
          {router.pathname != "/" && <MenuButton url="/">Home</MenuButton>}
          <MenuButton url="mailto:justinyuen2000@hotmail.com">
            Contact
          </MenuButton>
          <MenuDropdown dropdownItems={dropdownItems}>Projects</MenuDropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
