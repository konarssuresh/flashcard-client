import { useMemo } from "react";
import clsx from "clsx";
import AllCardsHeader from "../study-mode/main-section/main-section-header";
import {
  CategoryChip,
  Progress,
} from "../study-mode/main-section/question-card";
import { useFalshCardStore } from "../../store/flash-card-store";

const Card = ({ card }) => {
  return (
    <div
      className={clsx(
        "flex bg-neutral-0 flex-col border border-neutral-900 rounded-lg drop-shadow-lg drop-shadow-neutral-900"
      )}
    >
      <div className={clsx("p-4 border-b border-neutral-900")}>
        <h3 className={clsx("text-preset-3")}>{card.question}?</h3>
      </div>
      <div className={clsx("p-4 flex flex-col gap-1.5 min-h-32")}>
        <p className={clsx("text-preset-5 text-neutral-600")}>Answer:</p>
        <p className={clsx("text-neutral-900 text-preset-5")}>{card.answer}</p>
      </div>
      <div
        className={clsx(
          "flex flex-row items-center border-t border-neutral-900 grow"
        )}
      >
        <div className="px-4 py-3 border-r border-neutral-900 h-full flex items-center">
          <CategoryChip category={card.category} />
        </div>
        <div className="px-4 py-3">
          <Progress knownCount={card.knownCount} />
        </div>
      </div>
    </div>
  );
};

const AllCardsPage = () => {
  const { flashCards, selectedCategory, hideMastered } = useFalshCardStore();

  const cards = useMemo(() => {
    let cardsToConsider = [...flashCards];
    if (hideMastered) {
      cardsToConsider = cardsToConsider.filter((c) => c.knownCount < 5);
    }
    if (selectedCategory.length > 0) {
      cardsToConsider = cardsToConsider.filter((c) =>
        selectedCategory.includes(c.category)
      );
    }
    return cardsToConsider;
  }, [flashCards, selectedCategory, hideMastered]);

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <AllCardsHeader showShuffle={false} />
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:gap-6"
        )}
      >
        {cards?.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default AllCardsPage;
