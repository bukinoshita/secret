import classnames from 'classnames'
import React, { PureComponent } from 'react'

import { APPEARANCE, SIZE, TYPE, ButtonProps } from './button.types'
import { Colors, Radius, space } from 'ui/theme'

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    appearance: APPEARANCE.PRIMARY,
    disabled: false,
    outline: false,
    size: SIZE.MEDIUM,
    type: TYPE.BUTTON
  }

  render() {
    const {
      appearance,
      children,
      disabled,
      onClick,
      outline,
      size,
      style,
      type
    } = this.props
    const className = classnames({
      disabled,
      medium: size === SIZE.MEDIUM,
      outline,
      primary: appearance === APPEARANCE.PRIMARY
    })

    return (
      <button
        className={className}
        type={type}
        style={style}
        disabled={disabled}
        onClick={onClick}
      >
        {children}

        <style jsx>{`
          button {
            text-transform: uppercase;
            text-align: center;
            cursor: pointer;
            border: 1px solid transparent;
          }

          .primary {
            background-color: ${Colors.Black};
            color: ${Colors.White};
            border-color: ${Colors.Black};
          }

          .primary.outline {
            border-color: ${Colors.Black};
            color: ${Colors.Black};
            background-color: transparent;
          }

          .medium {
            font-size: 11px;
            line-height: 20px;
            padding: ${space.spacing(2)} ${space.spacing(6)};
            border-radius: ${Radius.Medium};
          }

          .disabled {
            opacity: 0.5;
            cursor: default;
            user-select: none;
            pointer-events: none;
          }
        `}</style>
      </button>
    )
  }
}
