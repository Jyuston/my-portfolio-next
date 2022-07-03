import Link from "next/link";
type MenuButtonProps = {
  url: string;
  children: React.ReactNode;
};

const MenuButton: React.FC<MenuButtonProps> = ({ url, children }) => {
  return (
    <Link href={url}>
      <a className="group rounded-sm inline-flex items-center text-base font-medium p-2 text-gray-500 hover:text-gray-600 ">
        {children}
      </a>
    </Link>
  );
};

export default MenuButton;
