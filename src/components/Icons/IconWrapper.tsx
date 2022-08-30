import { ReactNode } from "react";
import classNames from "src/utils/classNames";

type IconWrapperProps = {
  children: ReactNode;
  bgColour: string;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ children, bgColour }) => {
  return (
    <div
      className={classNames(
        bgColour,
        "flex min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 ease-in-out will-change-transform hover:scale-110 hover:cursor-pointer hover:drop-shadow-xl md:px-8 md:py-2 md:text-lg"
      )}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
