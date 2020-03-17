import React from 'react'

import { Colors, space, Radius } from 'ui/theme'

import { ModalFooterProps } from './modal.types'

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <footer className="modal-footer">
      {children}

      <style jsx>{`
        .modal-footer {
          height: 68px;
          display: flex;
          align-items: center;
          background-color: ${Colors.White_Lilac};
          border-bottom-right-radius: ${Radius.Large};
          border-bottom-left-radius: ${Radius.Large};
          padding-left: ${space.spacing(6)};
          padding-right: ${space.spacing(6)};
        }
      `}</style>
    </footer>
  )
}
