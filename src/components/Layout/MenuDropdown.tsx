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
              open ? "text-gray-900" : "text-gray-500",
              "group rounded-sm inline-flex items-center text-base font-medium p-2 hover:text-gray-600 focus:outline-none  focus:ring-gray-400"
            )}
          >
            <span>{children}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-4 px-2 w-screen max-w-xs sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-4">
                  {dropdownItems.map((item) => (
                    <Popover.Button as={Link} href={item.url}>
                      <a
                        key={item.title}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-200 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </a>
                    </Popover.Button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MenuDropdown;
