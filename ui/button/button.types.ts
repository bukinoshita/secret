import { CSSProperties } from 'react'

export enum Appearance {
  Primary = 'primary'
}

export enum Size {
  Medium = 'medium'
}

export enum Type {
  Button = 'button',
  Submit = 'submit'
}

export interface ButtonProps {
  appearance?: Appearance
  disabled?: boolean
  onClick?: () => void
  outline?: boolean
  size?: Size
  style?: CSSProperties
  type?: Type
}
