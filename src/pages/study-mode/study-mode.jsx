import { useReducer } from "react";
import shuffle from "lodash/shuffle";
import MainSection from "./main-section/main-section";
import Statistics from "./statistics/statistics";

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

    case "SHUFFLE_CARDS": {
      const shuffledCards = shuffle(state.cards);
      return {
        ...state,
        cards: shuffledCards,
        currentCard: shuffledCards[0] || null,
      };
    }

    default:
      return state;
  }
};

const StudyMode = () => {
  const [state, dispatch] = useReducer(reducer, {
    cards: [],
    currentCard: null,
  });
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <MainSection state={state} dispatch={dispatch} />
      <Statistics cards={state?.cards} />
    </div>
  );
};

export default StudyMode;
