import React, { FC } from 'react';
import classnames from 'classnames';

export interface LogoProps {
  className?: string;
  size?: string;
}

export const Logo: FC<Readonly<LogoProps>> = ({ className, size = '36' }) => {
  const classNames = classnames('items-center flex', className);

  return (
    <div className={classNames}>
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="black" />
        <rect width="128" height="128" fill="black" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72 37H24V45H72V37ZM104 37H78V45H104V37ZM24 61H42V69H24V61ZM48 61H56V69H48V61ZM104 61H62V69H104V61ZM24 85H52V93H24V85ZM58 85H104V93H58V85Z"
          fill="white"
        />
      </svg>

      <h1 className="text-3xl ml-2 font-medium">Secret</h1>
    </div>
  );
};
