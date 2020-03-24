export interface ModalAdvancedOptionsProps {
  isOpen: boolean
  onClose: () => void
  onApply: ({ password }: { password?: string }) => void
}
