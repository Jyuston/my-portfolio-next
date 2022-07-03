import { Tag } from "contentlayer/generated";

type TagProps = {
  tag: Tag;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      {tag.name}
    </span>
  );
};

export default Tag;
