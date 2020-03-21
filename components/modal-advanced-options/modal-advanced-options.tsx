import React, { useState, ChangeEvent } from 'react'

import { Button } from 'ui/button'
import { FormField } from 'ui/form-field'
import { Modal, ModalContent, ModalHeader, ModalFooter } from 'ui/modal'
import { space } from 'ui/theme'
import { Switcher } from 'ui/switcher'
import { Input, InputTypes } from 'ui/input'

export const ModalAdvancedOptions = ({ isOpen, onClose, onApply }: any) => {
  const [isPasswordProtectionOn, setPasswordProtection] = useState<boolean>(
    false
  )
  const [isSendToEmailOn, setSendToEmail] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const canApply = isPasswordProtectionOn && password.length === 0

  const handleApplyOptions = () => {
    const payload = { password }
    onApply(payload)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader title="Advanced options" onClose={onClose} />
      <ModalContent>
        <FormField
          title="Add password protection"
          description="Password protection is an extra security for your secret. It can only be opened with the password you create."
        >
          <Switcher
            id="password-protection"
            isChecked={isPasswordProtectionOn}
            onChange={() => setPasswordProtection(!isPasswordProtectionOn)}
          />
        </FormField>

        {isPasswordProtectionOn && (
          <Input
            label="Password"
            id="password"
            name="password"
            type={InputTypes.Password}
            placeholder="Type your password…"
            value={password}
            onChange={(event?: ChangeEvent<HTMLInputElement>) =>
              setPassword(event?.target?.value ?? '')
            }
          />
        )}

        <FormField
          title="Send to email"
          description="We will send your secret URL to the designated email."
        >
          <Switcher
            id="send-to-email"
            isChecked={isSendToEmailOn}
            onChange={() => setSendToEmail(!isSendToEmailOn)}
          />
        </FormField>

        {isSendToEmailOn && (
          <Input
            label="Email"
            id="email"
            name="email"
            type={InputTypes.Email}
            placeholder="Type your email address…"
          />
        )}
      </ModalContent>

      <ModalFooter>
        <Button onClick={handleApplyOptions} disabled={canApply}>
          Apply
        </Button>
      </ModalFooter>

      <style jsx>{`
        :global(.form-field) {
          margin-bottom: ${space.spacing(6)};
          margin-top: ${space.spacing(4)};
        }

        :global(.modal-footer) {
          flex-direction: row-reverse;
        }
      `}</style>
    </Modal>
  )
}
