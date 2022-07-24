import classNames from "src/utils/classNames";

type CarouselItemProps = {
  children: React.ReactNode;
  className: string;
  id: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div
      id={id}
      className={classNames(
        "inline-flex aspect-video w-full snap-center snap-always items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
