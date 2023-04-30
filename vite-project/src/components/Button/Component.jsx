import classNames from "classnames";

const Button = ({
  title,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
  rounded = "none", // none, sm, md, lg, full
  textColor = "white",
}) => {
  const roundedClass = `rounded-${rounded}`;
  const colorClass = `bg-[${color}] text-white`;

  return (
    <button
      className={classNames("py-2 px-3", {
        "bg-primary text-white":
          color === "primary" &&
          variant === "contained" &&
          textColor === "white",
        "bg-white text-primary border border-primary":
          color === "primary" &&
          variant === "outlined" &&
          textColor === "primary",
        "opacity-50 cursor-not-allowed pointer-events-none": disabled,
        [roundedClass]: rounded !== "none",
        [colorClass]: color !== "primary",
      })}
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
