import React, { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconTerminal extends PureComponent<IconProps> {
  render() {
    const { className, onClick, style } = this.props

    return (
      <IconBase className={className} style={style} onClick={onClick}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </IconBase>
    )
  }
}
