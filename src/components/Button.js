import classNames from "classnames";

function Button({ text, variant = "default" }) {
  return (
    <button
      type="button"
      className={classNames({
        "p-4 h-10 flex justify-center items-center border-2 text-white rounded hover:bg-gray-700 transition-colors": true,
        "bg-gray-500": variant === "default",
        "bg-green-500": variant === "success",
        "bg-yellow-500": variant === "warning",
        "bg-red-500": variant === "danger",
      })}
    >
      {text}
      {variant}
    </button>
  );
}

export default Button;
