import * as Icons from "@heroicons/react/solid";
import Tag from "../Tag";
import IconWrapper from "./IconWrapper";

const ResumeIcon: React.FC = () => {
  return (
    <a href="/Justin-Yuen-CV.pdf" target="_blank" rel="noreferrer">
      <IconWrapper bgColour="bg-indigo-500">
        <Icons.DocumentDuplicateIcon className="h-5 w-5 text-slate-200" />
        Resume
      </IconWrapper>
    </a>
  );
};

export default ResumeIcon;
