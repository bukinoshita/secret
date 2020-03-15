import { CSSProperties, MouseEvent } from 'react'

export interface IconProps {
  className?: string
  onClick?: (event?: MouseEvent) => void
  style?: CSSProperties
}
