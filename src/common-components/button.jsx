import clsx from "clsx";
import { motion as Motion } from "motion/react";

const Button = ({
  variant = "primary",
  className,
  shadow = true,
  ...remaining
}) => {
  const generalClasses = clsx(
    "text-preset-4 text-neutral-900 px-5 py-3 rounded-full text-neutral-900 border border-neutral-900  cursor-pointer",
    className
  );

  const primaryClasses = clsx("bg-yellow-500");

  const secondaryClasses = clsx("bg-neutral-0");

  const tertiaryClasses = clsx("bg-neutral-0");

  const shadowClasses = clsx({
    "drop-shadow-lg drop-shadow-neutral-900": variant !== "tertiary" && shadow,
  });

  const variantClasses =
    variant === "primary"
      ? primaryClasses
      : variant === "tertiary"
      ? tertiaryClasses
      : secondaryClasses;

  const classList = clsx(generalClasses, variantClasses, shadowClasses);

  return (
    <Motion.button
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={classList}
      {...remaining}
    />
  );
};

export default Button;
