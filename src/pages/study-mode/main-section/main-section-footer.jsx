import Button from "../../../common-components/button";
import IconChevronLeft from "../../../common-components/icons/IconChevronLeft";
import IconChevronRight from "../../../common-components/icons/IconChevronRight";

const MainSectionFooter = ({ onNext, onPrev, label }) => {
  return (
    <div className="flex flex-row justify-between items-center p-5">
      <Button
        onClick={onPrev}
        variant="tertiary"
        className={"flex flex-row gap-3 items-center drop-shadow-none"}
      >
        <IconChevronLeft />
        <span>Previous</span>
      </Button>

      <p className="text-preset-5 text-neutral-600">{label}</p>

      <Button
        onClick={onNext}
        variant="tertiary"
        className={"flex flex-row gap-3 items-center drop-shadow-none"}
      >
        <IconChevronRight />
        <span>Next</span>
      </Button>
    </div>
  );
};

export default MainSectionFooter;
