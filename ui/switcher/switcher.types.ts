import { ChangeEvent } from 'react'

export interface SwitcherProps {
  id: string
  isChecked?: boolean
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void
}
