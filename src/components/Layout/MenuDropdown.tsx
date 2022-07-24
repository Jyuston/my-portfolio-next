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
              open ? "text-gray-600" : "text-gray-500",
              "group inline-flex items-center rounded-sm text-base font-medium hover:text-gray-600 focus:outline-none  focus:ring-gray-400"
            )}
          >
            <span>{children}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "h-5 w-5 group-hover:text-gray-500 "
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
            <Popover.Panel className="absolute right-1/2 z-10 mt-2 w-screen max-w-xs translate-x-1/4 px-2 sm:px-0 md:right-0 md:translate-x-0">
              {({ close }) => (
                <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
                  <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-4">
                    {dropdownItems.map((item) => (
                      <Link href={item.url} key={item.title}>
                        <a
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-indigo-100"
                          onClick={() => close()}
                        >
                          <p className="text-base font-medium text-gray-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
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
