'use strict'

import React from 'react'

import { colors, typography } from './../theme'

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}

      <style jsx>{`
        button {
          display: inline-block;
          background-color: ${colors.white};
          color: ${colors.black};
          border: 0;
          border-radius: 0;
          padding: 12px 80px;
          font-size: ${typography.f10};
          text-transform: uppercase;
          font-weight: ${typography.bold};
          margin: 30px auto;
          text-align: center;
          cursor: pointer;
          outline: none;
          letter-spacing: 2px;
          transition: all 200ms;
        }

        button:focus,
        button:hover {
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
        }

        button[disabled] {
          background-color: ${colors.gray};
          cursor: default;
        }
      `}</style>
    </button>
  )
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
  disabled: false
}

export default Button
