import { motion as Motion } from "motion/react";

import { useFalshCardStore } from "../../../store/flash-card-store";
import Button from "../../../common-components/button";
import Popover from "../../../common-components/popover";
import IconChevronDown from "../../../common-components/icons/IconChevronDown";
import IconShuffle from "../../../common-components/icons/IconShuffle";
import { useMemo } from "react";

const CategoriesDropdown = () => {
  const { flashCards: options } = useFalshCardStore();

  let categories = useMemo(() => {
    const cats = options.map((opt) => opt.category);
    return Array.from(new Set(cats));
  }, [options]);

  return (
    <Popover
      variant="tertiary"
      buttonContent={
        <div className="flex flex-row gap-2 items-center">
          <span>All Categories</span>
          <IconChevronDown />
        </div>
      }
      placement="bottom-left"
      className="z-10"
    >
      <div className="flex flex-col">
        {categories.map((category) => (
          <p
            key={category}
            className="text-preset-5 text-neutral-700 mb-2 last:mb-0"
          >
            {category}
          </p>
        ))}
      </div>
    </Popover>
  );
};

const MainSectionHeader = () => {
  return (
    <div className="p-3 md:p-5 flex flex-row justify-between">
      <div className="flex flex-col md:flex-row gap-2">
        <CategoriesDropdown />
        <div className="flex flex-row items-center gap-1">
          <input
            className="w-4 h-4"
            type="checkbox"
            name="hideMastered"
            id="hideMastered"
          />
          <Motion.label
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            htmlFor="hideMastered"
            className="text-preset-4 cursor-pointer"
          >
            Hide Mastered
          </Motion.label>
        </div>
      </div>
      <Button variant="tertiary" className="flex flex-row gap-2 items-center">
        <IconShuffle />
        <span>Shuffle</span>
      </Button>
    </div>
  );
};

export default MainSectionHeader;
