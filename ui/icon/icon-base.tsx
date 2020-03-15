import React, { PureComponent } from 'react'
import { IconProps } from './icon.types'

export class IconBase extends PureComponent<IconProps> {
  render() {
    const { children, className, onClick, style } = this.props

    return (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
        onClick={onClick}
      >
        {children}

        <style jsx={true}>{`
          svg {
            cursor: ${onClick ? 'pointer' : 'default'};
            pointer-events: ${onClick ? 'initial' : 'none'};
          }
        `}</style>
      </svg>
    )
  }
}
