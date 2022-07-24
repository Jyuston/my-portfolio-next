import Link from "next/link";
type MenuButtonProps = {
  url: string;
  children: React.ReactNode;
};

const MenuButton: React.FC<MenuButtonProps> = ({ url, children }) => {
  return (
    <Link href={url}>
      <a className="group inline-flex items-center rounded-sm text-base font-medium text-gray-500 hover:text-gray-600 ">
        {children}
      </a>
    </Link>
  );
};

export default MenuButton;
