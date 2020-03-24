import { CSSProperties, ReactNode } from 'react'

export enum Appearance {
  Green = 'green'
}

export interface BadgeProps {
  appearance?: Appearance
  children: ReactNode
  style?: CSSProperties
}
