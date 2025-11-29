const PatternFlashcardBg = ({ className = "", ...props }) => (
  // This SVG is large and used as a background; keep it raw and allow sizing via props
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 400"
    className={className}
    {...props}
  >
    {/* Inline the original pattern-flashcard-bg.svg content if needed. Placeholder for now. */}
  </svg>
);

export default PatternFlashcardBg;
