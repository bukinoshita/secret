import { ReactNode, CSSProperties } from 'react'

export interface FormFieldProps {
  children: ReactNode
  description?: string
  style?: CSSProperties
  title: string
}
