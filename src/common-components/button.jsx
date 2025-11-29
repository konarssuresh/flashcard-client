import clsx from "clsx";

const Button = ({ variant = "primary", ...remaining }) => {
  const generalClasses = clsx("px-5 py-3 rounded-full text-neutral-900");

  const primaryClasses = clsx("bg-yellow-500");

  const secondaryClasses = clsx("bg-neutral-0");

  const className = `${generalClasses} ${
    variant === "primary" ? primaryClasses : secondaryClasses
  }`;

  return <button className={className} {...remaining} />;
};

export default Button;
