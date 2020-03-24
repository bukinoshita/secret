import React, { PureComponent } from 'react'
import classnames from 'classnames'

import { Colors, Radius, space, Weight } from 'ui/theme'

import { BadgeProps, Appearance } from './badge.types'
export class Badge extends PureComponent<BadgeProps> {
  static defaultProps = {
    appearance: Appearance.Green
  }

  render() {
    const { appearance, children, style } = this.props

    const className = classnames({
      green: appearance === Appearance.Green
    })

    return (
      <span className={className} style={style}>
        {children}

        <style jsx>{`
          span {
            background-color: transparent;
            text-transform: uppercase;
            padding: ${space.spacing(1)} ${space.spacing(2)};
            border-radius: ${Radius.Medium};
            font-size: 10px;
            line-height: 10px;
            text-align: center;
            font-weight: ${Weight.Bold};
            vertical-align: middle;
          }

          .green {
            background-color: ${Colors.Mint_Green};
            color: ${Colors.Black};
          }
        `}</style>
      </span>
    )
  }
}
