import React, { useState } from 'react'
import copy from 'copy-text-to-clipboard'

import { IconCheck, IconCopy } from 'ui/icon'
import { Colors, Radius, space, Weight } from 'ui/theme'

import { InputTypes, InputProps } from './input.types'

export const Input = ({
  copyable,
  disabled,
  hint,
  id,
  label,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value
}: InputProps) => {
  const [isCopied, handleCopy] = useState(false)
  const onCopy = () => {
    handleCopy(true)
    copy(value || '')
    setTimeout(() => handleCopy(false), 2000)
  }

  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>

      <input
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={value}
      />

      {hint && <span className="text-field__hint">{hint}</span>}

      {copyable && readOnly && isCopied ? (
        <IconCheck className="icon-right icon__check" onClick={onCopy} />
      ) : (
        <IconCopy className="icon-right icon__copy" onClick={onCopy} />
      )}

      <style jsx={true}>{`
        .text-field {
          position: relative;
        }

        label {
          font-size: 11px;
          font-weight: ${Weight.Medium};
          color: ${Colors.Trout};
          margin-bottom: ${space.spacing(1)};
          display: inline-block;
        }
        
        input {
          width: 100%;
          border-radius: ${Radius.Large};
          font-size: 13px;
          line-height: 20px;
          color: ${Colors.Storm_Gray};
          padding: ${space.spacing(2)};
          background-color: ${Colors.White_Lilac};
          border none;
          outline: none;
          display: block;
          cursor: ${readOnly ? 'default' : 'text'}
        }

        input::placeholder {
          color: #A8A9BC;
        }

        :global(.icon-right) {
          position: absolute;
          right: 12px;
          top: 31px;
          cursor: pointer;
        }

        :global(.icon__check) {
          color: ${Colors.Mountain_Meadown};
          cursor: default;
          pointer-events: none;
        }

        .text-field__hint {
          font-size: 11px;
          font-style: italic;
          color: ${Colors.Storm_Gray};
          margin-top: ${space.spacing(1)};
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

Input.defaultProps = {
  copyable: false,
  disabled: false,
  readOnly: false,
  type: InputTypes.Text
}
