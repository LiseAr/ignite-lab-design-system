
import React, { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
} 

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 active:bg-gray-800 w-full hover:ring-2 transition-colors ring-sky-800 autofill:bg-gray-800'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps)  {

  return (
    //    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    //   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    //   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    //   invalid:border-pink-500 invalid:text-pink-600
    //   focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    // "/>
    <input 
      className='bg-transparent flex-1 text-sky-200 text-xs focus:outline-none placeholder:text-gray-400 outline-none '
      {...props}
    />

  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}