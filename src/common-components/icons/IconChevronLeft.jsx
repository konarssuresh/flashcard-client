const IconChevronLeft = ({
  className = "",
  width = 16,
  height = 16,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className={className}
    {...props}
  >
    <path
      d="m5.14062 7.73438 4.59376-4.625c.125-.15626.37502-.15626.53122 0l.5938.625c.1562.125.1562.375 0 .53124l-3.68752 3.71876 3.68752 3.75002c.1562.1562.1562.375 0 .5312l-.5938.625c-.1562.1563-.40622.1563-.53122 0l-4.59376-4.62498c-.15624-.15624-.15624-.375 0-.53124z"
      fill="currentColor"
    />
  </svg>
);

export default IconChevronLeft;
