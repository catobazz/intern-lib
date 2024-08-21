import { ComponentPropsWithoutRef } from "react";
import s from './button.module.css'
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export function Button({ variant = "primary", fullWidth, ...props }: Props) {
  console.log("button");
  return <button {...props} className={clsx(s.button, s[variant], fullWidth && s.fullWidth)}></button>;
}
