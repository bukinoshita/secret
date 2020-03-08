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
  outline?: boolean
  size?: SIZE
  type?: TYPE
  style?: CSSProperties
  onClick?: () => void
}
