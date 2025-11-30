import { useEffect, useCallback, useMemo, useReducer } from "react";

import { useFalshCardStore } from "../../../store/flash-card-store";
import MainSectionHeader from "./main-section-header";
import MainSectionContent from "./main-section-content";
import MainSectionFooter from "./main-section-footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload.cards,
        currentCard: action.payload.cards?.[0] || null,
      };
    case "NEXT_CARD": {
      const currentIndex = state.cards.indexOf(state.currentCard);
      const nextIndex =
        currentIndex !== state.cards.length - 1 ? currentIndex + 1 : 0;
      return {
        ...state,
        currentCard: state.cards[nextIndex],
      };
    }
    case "PREV_CARD": {
      const currentIndex = state.cards.indexOf(state.currentCard);
      const prevIndex =
        currentIndex !== 0 ? currentIndex - 1 : state.cards.length - 1;
      return {
        ...state,
        currentCard: state.cards[prevIndex],
      };
    }
    default:
      return state;
  }
};

const MainSection = () => {
  const { flashCards, selectedCategory, hideMastered } = useFalshCardStore();

  const [state, dispatch] = useReducer(reducer, {
    cards: [],
    currentCard: null,
  });
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
  }, []);

  const handlePrevCard = useCallback(() => {
    dispatch({ type: "PREV_CARD" });
  }, []);

  return (
    <div
      className={`bg-neutral-0 text-neutral-900 flex flex-col w-full lg:w-2/3 border border-neutral-900 rounded-xl drop-shadow-xl drop-shadow-neutral-900`}
    >
      <MainSectionHeader cards={cards} />
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
