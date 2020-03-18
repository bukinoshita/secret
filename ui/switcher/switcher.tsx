import React from 'react'

import { Colors, Radius } from 'ui/theme'

import { SwitcherProps } from './switcher.types'

export const Switcher = ({ id, isChecked, onChange }: SwitcherProps) => {
  return (
    <>
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <label htmlFor={id} />

      <style jsx>{`
        input {
          height: 0;
          width: 0;
          visibility: hidden;
        }

        label {
          cursor: pointer;
          width: 40px;
          height: 24px;
          background-color: ${Colors.Sirocco};
          border: 1px solid ${Colors.Sirocco};
          display: inline-block;
          border-radius: 100px;
          position: relative;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.11);
        }

        label:after {
          content: ’’;
          position: absolute;
          top: 1px;
          left: 1px;
          width: 20px;
          height: 20px;
          background-color: ${Colors.White};
          border-radius: ${Radius.Rounded};
          transition: 0.25s;
        }

        input:checked + label {
          background-color: ${Colors.Mountain_Meadown};
          border: 1px solid ${Colors.Mountain_Meadown};
        }

        input:checked + label:after {
          left: calc(100% - 1px);
          transform: translateX(-100%);
        }

        label:active:after {
          width: 22px;
        }
      `}</style>
    </>
  )
}

Switcher.defaultProps = {
  isChecked: false
}
