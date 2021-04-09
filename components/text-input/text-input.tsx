import React, { FC } from 'react';

export interface TextInputProps {
  id: string;
  label: string;
  value?: string;
  defaultValue?: string;
  name: string;
  readOnly?: boolean;
  type?: 'text';
  hint?: string;
}

export const TextInput: FC<Readonly<TextInputProps>> = ({
  id,
  label,
  value,
  name,
  type = 'text',
  defaultValue,
  readOnly = false,
  hint,
}) => {
  return (
    <>
      <label className="font-medium text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="block mt-3 w-full py-3 px-4 rounded-sm bg-transparent border border-gray-700 rounded-sm"
        type={type}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />

      {hint && <span className="text-sm block mt-2 text-gray-400">{hint}</span>}
    </>
  );
};
