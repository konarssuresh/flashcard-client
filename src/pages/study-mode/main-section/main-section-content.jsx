import clsx from "clsx";

import { useFalshCardStore } from "../../../store/flash-card-store";
import QuestionCard from "./question-card";
import Button from "../../../common-components/button";
import IconCheck from "../../../common-components/icons/IconCircleCheck";
import IconReset from "../../../common-components/icons/IconReset";

const MainSectionContent = ({ currentCard }) => {
  const { flashCards, updateFlashcards } = useFalshCardStore();
  const card = flashCards?.find((c) => c.id === currentCard);

  const handleKnowThis = () => {
    if (!card) return;
    const newKnownCount = Math.min(card.knownCount + 1, 5);
    updateFlashcards({ id: card.id, key: "knownCount", value: newKnownCount });
  };

  const handleResetProgress = () => {
    if (!card) return;
    updateFlashcards({ id: card.id, key: "knownCount", value: 0 });
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 border-t border-b border-neutral-900",
        "py-6 px-4",
        "md:px-5 md:py-5"
      )}
    >
      <QuestionCard question={card} />
      <div
        className={clsx({
          "flex flex-col md:flex-row gap-5 justify-center": true,
        })}
      >
        <Button
          onClick={handleKnowThis}
          variant="primary"
          className={"flex flex-row gap-3 items-center justify-center"}
        >
          <IconCheck /> <span>I Know This</span>
        </Button>
        <Button
          onClick={handleResetProgress}
          variant="secondary"
          className={"flex flex-row gap-3 items-center justify-center"}
        >
          <IconReset />
          <span>Reset Progress</span>
        </Button>
      </div>
    </div>
  );
};
export default MainSectionContent;
