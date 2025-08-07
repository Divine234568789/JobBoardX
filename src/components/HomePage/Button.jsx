const Button = ({
  label,
  onClick,
  color = "primary",
  size = "md",
  className = "",
}) => {
  const base =
    " p-2 rounded focus:outline-none focus:ring-1 focus:ring-offset-1 hover:cursor-pointer hover:opacity-60 transition-opacity duration-200";

  const colors = {
    primary: "bg-blue-500 text-white hover:bg-blue-500",
    secondary: "bg-white text-black hover:bg-white",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const allClasses = `${base} ${colors[color]} ${sizes[size]} ${className}`;

  return (
    <button onClick={onClick} className={allClasses}>
      {label}
    </button>
  );
};

export default Button;
