import React, { PureComponent } from 'react'

import { colors, radius, spacing } from 'ui/theme'

export class Badge extends PureComponent<any> {
  render() {
    const { children, style } = this.props

    return (
      <span style={style}>
        {children}

        <style jsx={true}>{`
          span {
            color: ${colors.white};
            background-color: ${colors.green};
            text-transform: uppercase;
            padding: ${spacing.small} ${spacing.default};
            border-radius: ${radius.medium};
            font-size: 10px;
            line-height: 10px;
            text-align: center;
            font-weight: 500;
            vertical-align: middle;
          }
        `}</style>
      </span>
    )
  }
}
