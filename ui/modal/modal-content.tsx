import React from 'react'

import { space } from 'ui/theme'

import { ModalContentProps } from './modal.types'

export const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="modal-content">
      {children}

      <style jsx>{`
        .modal-content {
          padding: ${space.spacing(6)};
        }
      `}</style>
    </div>
  )
}
