import { IconButton } from '@material-tailwind/react'
import { ReactNode } from 'react';

interface IPropsOfComponent {
  className?: string;
  children?: ReactNode | string;
  [key: string]: any;
}

export default function TextIconButton({ className = '', children, ...others }: any) {
  return (
    <IconButton
      variant="text"
      className={`w-8 h-8 p-0 text-white hover:bg-gray-100 hover:bg-opacity-10 active:bg-gray-100 active:bg-opacity-10 ${className}`}
      {...others}
    >
      {children}
    </IconButton>
  )
}