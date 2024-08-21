import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";
import s from './button.module.css'
import clsx from "clsx";
import {Slot} from "@radix-ui/react-slot";

type Props = ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "outlined" | "ghost";
    fullWidth?: boolean;
};

export function Button(
    {
        variant = "primary",
        asChild,
        fullWidth,
        ...props
    }: Props) {

    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
            {...props}
            className={clsx(s.button, s[variant], fullWidth && s.fullWidth)}
        />)
}

// export const Button = forwardRef<ElementRef<"button">, Props>((
//     {
//         variant = "primary",
//         asChild,
//         fullWidth,
//         ...props
//     }, ref) => {
//
//     const Comp = asChild ? Slot : 'button';
//     return (
//         <Comp
//             {...props}
//             ref={ref}
//             className={clsx(s.button, s[variant], fullWidth && s.fullWidth)}
//         />)
// }) кнопка с рефами
