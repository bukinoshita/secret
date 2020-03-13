import { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconLayout extends PureComponent<IconProps> {
  render() {
    const { style } = this.props

    return (
      <IconBase style={style}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </IconBase>
    )
  }
}
