import { PureComponent } from 'react'

import { IconBase } from './icon-base'

import { IconProps } from './icon.types'

export class IconCopy extends PureComponent<IconProps> {
  render() {
    const { className, onClick, style } = this.props

    return (
      <IconBase className={className} style={style} onClick={onClick}>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </IconBase>
    )
  }
}
