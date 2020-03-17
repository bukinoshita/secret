import React, { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconCode extends PureComponent<IconProps> {
  render() {
    const { className, onClick, style } = this.props

    return (
      <IconBase className={className} style={style} onClick={onClick}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </IconBase>
    )
  }
}
