import clsx from 'clsx'

const FaqItem = ({ item, index }) => {
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {}}
      >
        <div className={"flex-1"}>
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div className={clsx("h6 text-p4")}>
            {item.question}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
