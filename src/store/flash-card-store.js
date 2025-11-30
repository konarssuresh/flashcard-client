import { create } from "zustand";
import { FLASH_CARDS } from "./data";

export const getCards = () => {
  const cards = localStorage.getItem("flashcards");
  return cards ? JSON.parse(cards) : FLASH_CARDS;
};

export const useFalshCardStore = create((set) => ({
  flashCards: getCards(),
  updateFlashcards: ({ id, key, value }) => {
    console.log("Updating flashcard:", id, key, value);
    return set((state) => {
      let cardsCopy = [...state.flashCards];
      const updatedCards = cardsCopy.map((card) =>
        card.id === id ? { ...card, [key]: value } : card
      );
      localStorage.setItem("flashcards", JSON.stringify(updatedCards));
      return {
        flashCards: updatedCards,
      };
    });
  },
  currentQuestionId: null,
  setCurrentQuestionId: (id) => set({ currentQuestionId: id }),
  hideMastered: false,
  setHideMastered: (hide) => set({ hideMastered: hide }),
  selectedCategory: [],
  addCategory: (category) =>
    set((state) => ({
      selectedCategory: category ? [...state.selectedCategory, category] : [],
    })),
  removeCategory: (category) =>
    set((state) => ({
      selectedCategory: state.selectedCategory.filter((c) => c !== category),
    })),
  setSelectedCategory: (categories) => set({ selectedCategory: categories }),
}));
