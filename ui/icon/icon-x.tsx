import React, { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconX extends PureComponent<IconProps> {
  render() {
    const { className, onClick, style } = this.props

    return (
      <IconBase className={className} style={style} onClick={onClick}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </IconBase>
    )
  }
}
