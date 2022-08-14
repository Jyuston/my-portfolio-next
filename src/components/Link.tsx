import { ExternalLinkIcon } from "@heroicons/react/solid";

type LinkProps = {
  url: string;
  github: boolean;
};

const Link: React.FC<LinkProps> = ({ url, github }) => {
  return (
    <a className="flex items-center gap-1">
      <ExternalLinkIcon className="h-5 w-5" /> <span>Hey</span>
    </a>
  );
};

export default Link;
