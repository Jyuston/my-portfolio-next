import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import classNames from "src/utils/classNames";

type MenuDropdownProps = {
  dropdownItems: Item[];
  children: React.ReactNode;
};

export type Item = {
  title: string;
  url: string;
  description: string;
};

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  dropdownItems,
  children,
}) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? "text-gray-600 dark:text-indigo-400"
                : "text-gray-500 dark:text-gray-200",
              "group inline-flex items-center rounded-sm text-lg font-medium hover:text-gray-600 focus:outline-none  focus:ring-gray-400  dark:hover:text-indigo-400"
            )}
          >
            <span>{children}</span>
            <ChevronDownIcon
              className={classNames(
                open
                  ? "text-gray-600dark:text-indigo-400"
                  : "text-gray-400 dark:text-gray-200",
                "h-5 w-5 group-hover:text-gray-500 dark:hover:text-indigo-400"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-700"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-4"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-4"
            leaveTo="opacity-0 translate-y-0"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-screen max-w-xs translate-x-[50px]  px-2 sm:px-0 md:translate-x-0">
              {({ close }) => (
                <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-gray-500 ring-opacity-5 ">
                  <div className="relative grid gap-3 bg-white px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-4">
                    {dropdownItems.map((item) => (
                      <Link href={item.url} key={item.title}>
                        <a
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-indigo-200 dark:hover:bg-gray-900"
                          onClick={() => close()}
                        >
                          <p className="text-base font-medium text-gray-700 dark:text-gray-200">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MenuDropdown;
