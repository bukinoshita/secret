import classnames from 'classnames'
import React, { PureComponent } from 'react'

import { APPEARANCE, SIZE, TYPE, ButtonProps } from './button.types'
import { Colors, radius, spacing } from 'ui/theme'

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    appearance: APPEARANCE.PRIMARY,
    outline: false,
    size: SIZE.MEDIUM,
    type: TYPE.BUTTON
  }

  render() {
    const { children, appearance, outline, type, onClick, size, style } = this.props
    const className = classnames({
      primary: appearance === APPEARANCE.PRIMARY,
      medium: size === SIZE.MEDIUM,
      outline
    })

    return (
      <button className={className} type={type} style={style} onClick={onClick}>
        {children}

        <style jsx={true}>{`
          button {
            text-transform: uppercase;
            text-align: center;
            cursor: pointer;
            border: 1px solid transparent;
            padding: ${spacing.default} ${spacing.large};
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
            padding: ${spacing.default} ${spacing.large};
            border-radius: ${radius.medium};
          }
        `}</style>
      </button>
    )
  }
}
