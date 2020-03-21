import { CSSProperties } from 'react'

export enum APPEARANCE {
  PRIMARY = 'primary'
}

export enum SIZE {
  MEDIUM = 'medium'
}

export enum TYPE {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export interface ButtonProps {
  appearance?: APPEARANCE
  disabled?: boolean
  onClick?: () => void
  outline?: boolean
  size?: SIZE
  style?: CSSProperties
  type?: TYPE
}
