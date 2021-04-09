import React, { ChangeEvent, FC } from 'react';

export interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: FC<Readonly<TextareaProps>> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full p-4 text-base h-40 text-gray-500 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-800 rounded-sm resize-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800 focus:ring-opacity-50 outline-none"
      value={value}
      onChange={onChange}
    />
  );
};
