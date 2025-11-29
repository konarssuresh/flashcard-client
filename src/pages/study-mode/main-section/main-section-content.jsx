import clsx from "clsx";

import QuestionCard from "./question-card";
import Button from "../../../common-components/button";

const MainSectionContent = () => {
  return (
    <div
      className={clsx("flex flex-col gap-5", "py-6 px-4", "md:px-5 md:py-5")}
    >
      <QuestionCard />
      <div
        className={clsx({
          "flex flex-row gap-5": true,
        })}
      >
        <Button variant="primary" className="flex-1">
          I know this
        </Button>
        <Button variant="secondary" className="flex-1">
          Reset Progress
        </Button>
      </div>
    </div>
  );
};
export default MainSectionContent;
