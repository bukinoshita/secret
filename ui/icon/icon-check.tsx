import React, { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconCheck extends PureComponent<IconProps> {
  render() {
    const { className, onClick, style } = this.props

    return (
      <IconBase className={className} style={style} onClick={onClick}>
        <polyline points="20 6 9 17 4 12" />
      </IconBase>
    )
  }
}
