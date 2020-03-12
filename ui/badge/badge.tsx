import React, { PureComponent } from 'react'

import { Colors, radius, spacing } from 'ui/theme'

export class Badge extends PureComponent<any> {
  render() {
    const { children, style } = this.props

    return (
      <span style={style}>
        {children}

        <style jsx={true}>{`
          span {
            color: ${Colors.White};
            background-color: ${Colors.Mountain_Meadown};
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
