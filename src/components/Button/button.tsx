import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

export function Button(props: Props) {
  console.log("button");
  return <button {...props}>Hello World</button>;
}
