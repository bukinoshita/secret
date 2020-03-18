import React from 'react'

import { Colors, space, Radius, Weight } from 'ui/theme'
import { IconX, IconSettings } from 'ui/icon'
import { ModalHeaderProps } from './modal.types'

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
  <header className="modal-header">
    <div>
      <span className="modal-header__icon">
        <IconSettings className="icon icon--settings" />
      </span>
      <h2 className="modal-header__title">{title}</h2>
    </div>

    <IconX className="icon icon--close" onClick={onClose} />

    <style jsx>{`
      .modal-header {
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: ${space.spacing(6)};
        padding-right: ${space.spacing(6)};
        width: 100%;
        justify-content: space-between;
      }

      .modal-header div {
        display: grid;
        grid-template-columns: 32px auto;
        align-items: center;
        grid-column-gap: ${space.spacing(4)};
      }

      .modal-header__icon {
        width: 32px;
        height: 32px;
        border-radius: ${Radius.Rounded};
        background-color: ${Colors.White_Lilac};
        display: flex;
        align-items: center;
        text-align: center;
      }

      .modal-header__title {
        font-weight: ${Weight.Medium};
        font-size: 16px;
      }

      :global(.icon) {
        color: ${Colors.Storm_Gray};
      }

      :global(.icon--settings) {
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </header>
)
