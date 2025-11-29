import { create } from "zustand";
import { FLASH_CARDS } from "./data";

export const getCards = () => {
  const cards = localStorage.getItem("flashcards");
  return cards ? JSON.parse(cards) : FLASH_CARDS;
};

export const useFalshCardStore = create((set) => ({
  flashCards: getCards(),
  updateFlashcards: ({ id, key, value }) =>
    set((state) => ({
      flashcards: state.flashcards.map((card) =>
        card.id === id ? { ...card, [key]: value } : card
      ),
    })),
  currentQuestionId: null,
  setCurrentQuestionId: (id) => set({ currentQuestionId: id }),
}));
