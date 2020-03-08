'use strict'

import React from 'react'

import { colors, typography } from './../theme'

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  autoFocus,
  multiline,
  customStyle
}) => {
  return (
    <div>
      {multiline ? (
        <textarea
          name={name}
          rows="1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          style={customStyle}
        />
      )}

      <style jsx>{`
        input {
          width: 100%;
          resize: none;
          background-color: transparent;
          border: 1px solid ${colors.gray};
          padding: 15px;
          font-size: ${typography.f12};
          color: ${colors.white};
          margin-top: 15px;
          outline: none;
          font-weight: ${typography.semibold};
          transition: all 200ms;
          max-width: 500px;
        }

        input::-webkit-input-placeholder {
          color: ${colors.gray};
        }

        input::-moz-placeholder {
          color: ${colors.gray};
        }

        input:-ms-input-placeholder {
          color: ${colors.gray};
        }

        input:-moz-placeholder {
          color: ${colors.gray};
        }

        input:focus {
          border-color: ${colors.white};
        }

        textarea {
          width: 100%;
          resize: none;
          min-height: 100px;
          background-color: transparent;
          border: 1px solid ${colors.gray};
          padding: 15px;
          font-size: ${typography.f12};
          color: ${colors.white};
          outline: none;
          font-weight: ${typography.semibold};
          transition: all 200ms;
          max-width: 500px;
        }

        textarea::-webkit-input-placeholder {
          color: ${colors.gray};
        }

        textarea::-moz-placeholder {
          color: ${colors.gray};
        }

        textarea:-ms-input-placeholder {
          color: ${colors.gray};
        }

        textarea:-moz-placeholder {
          color: ${colors.gray};
        }

        textarea:focus {
          border-color: ${colors.white};
        }
      `}</style>
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  multiline: false,
  autoFocus: false
}

export default Input
