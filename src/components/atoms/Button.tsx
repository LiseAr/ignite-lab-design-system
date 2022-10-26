
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

const Button = ({  children , asChild, className, ...props}: ButtonProps) => {

  const Comp = asChild ? Slot : 'button'
  return (
    <Comp 
      className={
        clsx(
          'py-2 px-4 bg-sky-900 rounded font-semibold text-black text-sm w-full transition-all opacity-80 hover:opacity-100 focus:ring-2 ring-sky-300', 
          className
        )
      }
      {...props}
    >
      {children}
    </Comp>
  )
}

export {Button}