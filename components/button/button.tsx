import React, { FC, MouseEvent } from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  appearance?: 'primary' | 'secondary' | 'fade';
  disabled?: boolean;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  size?: 'medium' | 'small' | 'icon';
}

export const Button: FC<Readonly<ButtonProps>> = ({
  className,
  children,
  type = 'button',
  disabled = false,
  appearance = 'primary',
  onClick,
  size = 'medium',
}) => {
  const classNames = classnames(
    'uppercase text-xs rounded-sm tracking-wider inline-flex items-center duration-200 transition ease-in-out',
    {
      'bg-black text-white dark:bg-white dark:text-black':
        appearance === 'primary',
      'bg-transparent text-black dark:text-white hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5':
        appearance === 'secondary',
      'bg-black text-black bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:text-white dark:bg-opacity-5 dark:hover:bg-opacity-10':
        appearance === 'fade',
      'py-3 px-12': size === 'medium',
      'py-3 px-4': size === 'small',
      'py-3 px-3': size === 'icon',
      'cursor-not-allowed bg-opacity-50 dark:bg-opacity-50': disabled,
    },
    className,
  );

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
