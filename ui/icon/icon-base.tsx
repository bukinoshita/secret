import React, { PureComponent } from 'react'

export class IconBase extends PureComponent<any> {
  render() {
    const { children, style } = this.props

    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
      >
        {children}
      </svg>
    )
  }
}
