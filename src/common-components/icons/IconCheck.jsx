const IconCheck = ({ className = "", width = 9, height = 7, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 9 7"
    className={className}
    {...props}
  >
    <path
      d="m7.98828.0976562c.09766-.0976562.25391-.0976562.33203 0l.56641.5468748c.07812.097657.07812.253907 0 .332031l-5.85938 5.859378c-.09765.09765-.23437.09765-.33203 0l-2.617185-2.59766c-.078125-.09766-.078125-.2539 0-.33203l.566406-.56641c.078125-.07812.234375-.07812.332031 0l1.874998 1.89454z"
      fill="currentColor"
    />
  </svg>
);

export default IconCheck;
