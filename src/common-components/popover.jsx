import { useState, useRef, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import Button from "./button.jsx";

const Popover = ({
  buttonContent,
  children,
  placement = "bottom",
  open,
  closeOnClick = false,
  className,
  variant,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof open === "boolean") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(open);
    }
  }, [open]);

  // Placement classes mapping
  const placementClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    "top-left": "bottom-full mb-2 left-0",
    "top-right": "bottom-full mb-2 right-0",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    "bottom-left": "top-full mt-2 left-0",
    "bottom-right": "top-full mt-2 right-0",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
    "bottom-full": "top-full left-0 w-full max-h-60 overflow-auto ",
  };

  const classes = placementClasses[placement] || placementClasses.bottom;

  const handleClick = useCallback(() => {
    if (closeOnClick) {
      setIsOpen(false);
    }
  }, [closeOnClick]);

  return (
    <Motion.div
      className={`relative inline-block text-left ${className || ""}`}
      ref={popoverRef}
    >
      <Button
        variant={variant || "tertiary"}
        className={className || ""}
        onClick={() => !open && setIsOpen(!isOpen)}
      >
        {buttonContent}
      </Button>

      <AnimatePresence>
        {isOpen && children && (
          <Motion.div
            whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
            transition={{ duration: 0.2 }}
            onClick={handleClick}
            className={`absolute z-10 ${classes} bg-neutral-0 border border-neutral-900 rounded shadow-lg w-56 `}
          >
            <div className="px-2 py-1.5">{children}</div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default Popover;
