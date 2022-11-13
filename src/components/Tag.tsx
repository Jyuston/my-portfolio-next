import { Tag } from "contentlayer/generated";

type TagProps = {
  tag: Tag;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-600 dark:text-slate-200">
      {tag.name}
    </span>
  );
};

export default Tag;
