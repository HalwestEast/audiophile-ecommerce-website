import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classes: Parameters<typeof clsx>) {
  return twMerge(clsx(...classes));
}
