import { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  name: string;
  autoFocus?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode | string;
  variant?: 'default' | 'light';
  type?: 'submit' | 'button';
}

const buttonVariants = {
  default:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  light:
    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
};

export const Button = ({
  name = '',
  onClick,
  variant = 'default',
  type = 'button',
  children,
  autoFocus,
}: ButtonProps) => (
  <button
    name={name}
    type={type}
    className={buttonVariants[variant]}
    onClick={onClick}
    autoFocus={autoFocus}
  >
    {children}
  </button>
);
