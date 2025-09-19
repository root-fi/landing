"use client";

import classNames from "classnames";
import React, { CSSProperties, FC, HTMLAttributes, MouseEvent } from "react";

import { Icons, IconType } from "@/shared/icons";

export type IconProps = {
  icon: IconType;
  size?: number;
  disabled?: boolean;
  width?: number;
  height?: number;

  containerSize?: number;
  containerWidth?: number;
  containerHeight?: number;

  bgColor?: string;
  color?: string;
  hoverColor?: string;
  borderColor?: string;
  borderRadius?: string;
  rotate?: number;

  strokeWidth?: number;
  opacity?: CSSProperties["opacity"];
  hoverOpacity?: CSSProperties["opacity"];
  hoverBgColor?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
} & HTMLAttributes<HTMLElement>;

export const BaseIcon: FC<IconProps> = ({
  icon,
  size = 20,
  onClick,
  disabled = false,
  color,
  width,
  height,
  containerSize,
  containerWidth,
  containerHeight,
  strokeWidth,
  hoverColor,
  hoverOpacity,
  opacity,
  rotate,
  hoverBgColor,
  borderRadius = "0.25rem",
  bgColor,
  borderColor,
  className,
  ...props
}) => {
  const IconComponent = Icons[icon];
  if (!IconComponent) return null;

  const w = width || size;
  const h = height || size;

  const containerW = containerWidth || containerSize || w;
  const containerH = containerHeight || containerSize || h;

  const baseStyles = classNames(
    "flex items-center justify-center box-border relative transition-all duration-300",
    {
      "cursor-pointer": !!onClick && !disabled,
      "cursor-not-allowed": disabled,
    },
    className
  );

  const dynamicStyles = classNames({
    [`bg-[${bgColor}]`]: bgColor,
    [`hover:bg-[${hoverBgColor}]`]: hoverBgColor,
    [`text-[${color}]`]: color,
    [`hover:text-[${hoverColor}]`]: hoverColor,
    [`opacity-[${opacity}]`]: opacity !== undefined,
    [`hover:opacity-[${hoverOpacity}]`]: hoverOpacity !== undefined,
    [`border border-[${borderColor}]`]: borderColor,
  });

  const style: CSSProperties = {
    width: containerW,
    height: containerH,
    borderRadius,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  const node = (
    <IconComponent
      width={`${w}px`}
      height={`${h}px`}
      strokeWidth={strokeWidth}
    />
  );

  return (
    <span
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={disabled ? undefined : onClick}
      style={style}
      className={classNames("Icon", baseStyles, dynamicStyles, {
        "Icon-disabled": disabled,
      })}
      data-testid={icon}
      {...props}
    >
      {node}
    </span>
  );
};
