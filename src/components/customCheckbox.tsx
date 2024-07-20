"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import CheckIcon from "@/assets/images/tiendaPage/check.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CustomCheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  name: string;
  value: string;
  isChecked: boolean;
};

const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CustomCheckboxProps
>(({ className, name, value, isChecked, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[23px] w-[23px] shrink-0 rounded-sm border-2 border-[#9E958F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    name={name}
    value={value}
    defaultChecked={isChecked}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Image
        src={CheckIcon}
        alt="checkImg"
        className="object-contain absolute top-[1px]"
        width={26}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

CustomCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { CustomCheckbox };
