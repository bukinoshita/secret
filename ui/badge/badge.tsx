import React, { PureComponent } from 'react'

import { Colors, Radius, space } from 'ui/theme'

export class Badge extends PureComponent<any> {
  render() {
    const { children, style } = this.props

    return (
      <span style={style}>
        {children}

        <style jsx>{`
          span {
            color: ${Colors.White};
            background-color: ${Colors.Mountain_Meadown};
            text-transform: uppercase;
            padding: ${space.spacing(1)} ${space.spacing(2)};
            border-radius: ${Radius.Medium};
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
