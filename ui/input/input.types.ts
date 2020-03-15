import { ChangeEvent } from 'react'

export enum InputTypes {
  Text = 'text'
}

export interface InputProps {
  copyable?: boolean
  disabled?: boolean
  id: string
  label?: string
  name: string
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
  type?: InputTypes
  value?: string
}
