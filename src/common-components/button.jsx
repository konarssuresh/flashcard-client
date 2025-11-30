import clsx from "clsx";
import { motion as Motion } from "motion/react";

const Button = ({ variant = "primary", className, ...remaining }) => {
  const generalClasses = clsx(
    "text-preset-4 text-neutral-900 px-5 py-3 rounded-full text-neutral-900 border border-neutral-900  cursor-pointer",
    className
  );

  const primaryClasses = clsx(
    "bg-yellow-500 drop-shadow-lg drop-shadow-neutral-900"
  );

  const secondaryClasses = clsx(
    "bg-neutral-0 drop-shadow-lg drop-shadow-neutral-900"
  );

  const tertiaryClasses = clsx("bg-neutral-0");

  const variantClasses =
    variant === "primary"
      ? primaryClasses
      : variant === "tertiary"
      ? tertiaryClasses
      : secondaryClasses;

  const classList = clsx(generalClasses, variantClasses);

  return (
    <Motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={classList}
      {...remaining}
    />
  );
};

export default Button;
