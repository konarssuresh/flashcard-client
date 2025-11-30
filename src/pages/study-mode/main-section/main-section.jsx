import { useEffect, useCallback, useMemo } from "react";

import { useFalshCardStore } from "../../../store/flash-card-store";
import MainSectionHeader from "./main-section-header";
import MainSectionContent from "./main-section-content";
import MainSectionFooter from "./main-section-footer";

const MainSection = ({ state, dispatch }) => {
  const { flashCards, selectedCategory, hideMastered } = useFalshCardStore();

  const { cards, currentCard } = state;
  const setCards = (cards) =>
    dispatch({ type: "SET_CARDS", payload: { cards } });

  const cardsIds = useMemo(() => {
    let cardsToConsider = [...flashCards];
    if (hideMastered) {
      cardsToConsider = cardsToConsider.filter((c) => c.knownCount < 5);
    }
    if (selectedCategory.length > 0) {
      cardsToConsider = cardsToConsider.filter((c) =>
        selectedCategory.includes(c.category)
      );
    }
    return cardsToConsider.map((c) => c.id);
  }, [flashCards, selectedCategory, hideMastered]);

  useEffect(() => {
    setCards(cardsIds);
  }, [cardsIds]);

  const handleNextCard = useCallback(() => {
    dispatch({ type: "NEXT_CARD" });
  }, [dispatch]);

  const handlePrevCard = useCallback(() => {
    dispatch({ type: "PREV_CARD" });
  }, [dispatch]);

  const handleShuffleCards = useCallback(() => {
    dispatch({ type: "SHUFFLE_CARDS" });
  }, [dispatch]);

  return (
    <div
      className={`bg-neutral-0 text-neutral-900 flex flex-col w-full lg:w-2/3 border border-neutral-900 rounded-xl drop-shadow-xl drop-shadow-neutral-900`}
    >
      <MainSectionHeader cards={cards} onShuffle={handleShuffleCards} />
      <MainSectionContent currentCard={currentCard} />
      <MainSectionFooter
        label={`Card ${cards.indexOf(currentCard) + 1} of ${cards.length}`}
        onNext={handleNextCard}
        onPrev={handlePrevCard}
      />
    </div>
  );
};

export default MainSection;
