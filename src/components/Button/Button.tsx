import { ReactNode } from "react";
import clsx from "clsx";

type VariantProps = {
  variant: "primary" | "outline" | "link";
  children: ReactNode;
};

export default function Button({ variant, children }: VariantProps) {
  const baseClasses = clsx(
    "w-[160px] h-[48px] flex items-center justify-center font-manrope text-sm font-normal transition-all"
  );
  const variantClasses = clsx({
    "bg-[#D87D4A] hover:bg-[#FBAF85] text-white": variant === "primary",
    "border-2 border-black hover:bg-black text-black hover:text-white":
      variant === "outline",
    "text-black hover:text-[#FBAF85]": variant === "link",
  });

  return (
    <button className={clsx(baseClasses, variantClasses)}>
      <div className={clsx("flex items-center gap-2")}>
        {children}
        {variant === "link" && (
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32178 1L6.32178 6L1.32178 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
