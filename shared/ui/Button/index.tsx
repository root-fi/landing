import React from "react";
import classnames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  size?: "xs" | "s" | "m" | "l";
  variant?: "main" | "additional" | "default";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "s",
  variant = "main",
  className,
  ...props
}) => {
  const baseStyles =
    "font-mont transition-colors flex justify-center items-center cursor-pointer";

  const sizeStyles = {
    xs: "h-[32px] rounded-[10px] px-[16px] text-xs font-semibold",
    s: "h-[40px] rounded-[14px] px-[28px] text-s font-bold",
    m: "h-[48px] rounded-[16px] px-[32px] text-m font-bold",
    l: "h-[58px] rounded-[16px] px-[32px] text-l font-bold",
  };

  const variantStyles = {
    main: "text-main-button-text bg-[linear-gradient(270deg,_#10EDED_-0.53%,_#10EDC1_99.47%)] hover:bg-[linear-gradient(270deg,_#00C19A_-0.53%,_#10EDED_99.47%)]",
    additional:
      "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700",
    default: "bg-main-button-text hover:opacity-[0.9]",
  };

  return (
    <button
      className={classnames(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {variant === "default" ? (
        <span className="bg-clip-text text-transparent inline-block bg-[linear-gradient(270deg,_#10EDED_-0.53%,_#10EDC1_99.47%)]">
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};
