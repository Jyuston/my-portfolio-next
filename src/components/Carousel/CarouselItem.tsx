import classNames from "src/utils/classNames";

type CarouselItemProps = {
  children: React.ReactNode;
  className: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ children, className }) => {
  return (
    <div
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
