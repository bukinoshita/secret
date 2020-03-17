import { ReactNode, MouseEvent } from 'react'

export interface ModalContentProps {
  children: ReactNode
}

export interface ModalProps extends ModalContentProps {
  isOpen?: boolean
  onClose: (event?: MouseEvent) => void
}

export interface ModalHeaderProps {
  title: string
  onClose: (event?: MouseEvent) => void
}

export interface ModalFooterProps extends ModalContentProps {}
