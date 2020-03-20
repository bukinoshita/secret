import { NextPageContext } from 'next'
import React, { useState, ChangeEvent } from 'react'

import { App } from 'layouts/app'

import { PageTitle } from 'components/page-title'

import { Button } from 'ui/button'
import { Input, InputTypes } from 'ui/input'
import { space } from 'ui/theme'

import { useDecrypt } from 'hooks/use-keychain'

import { api } from 'utils/api'

const Secret = ({ id, jwk, pwd }: any) => {
  const [decrypt] = useDecrypt()
  const [isRevealed, reveal] = useState(false)
  const [password, setPassword] = useState('')
  const [secret, setSecret] = useState(
    'send a message through a safe, private, and encrypted link that automatically expires to ensure your stuff does not remain online forever.'
  )

  const onReveal = async () => {
    try {
      const {
        data: { iv, cipherText }
      } = await api(`http://localhost:3000/api/get-secret?id=${id}`)
      const mySecret = await decrypt(iv, cipherText, jwk)

      setSecret(mySecret)
      reveal(true)
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <App>
      <PageTitle
        center
        title="Time to reveal the secret"
        subtitle="Safely share your secret without having it stored in any app."
      />

      <section>
        <h2>{secret}</h2>

        {!isRevealed && (
          <div>
            {pwd && (
              <Input
                label="Passphrase"
                id="passphrase"
                name="passphrase"
                placeholder="Passphrase to reveal secret…"
                type={InputTypes.Password}
                value={password}
                onChange={(event?: ChangeEvent<HTMLInputElement>) =>
                  setPassword(event?.target?.value ?? '')
                }
              />
            )}

            <Button onClick={onReveal}>Revel the secret</Button>
          </div>
        )}
      </section>

      <style jsx>{`
        section {
          text-align: center;
          position: relative;
          margin-top: ${space.spacing(14)};
        }

        h2 {
          font-weight: 400;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          font-size: 20px;
          line-height: 34px;
          filter: ${isRevealed ? 'blur(0)' : 'blur(10px)'};
          min-height: 100px;
          pointer-events: none;
          user-select: none;
          word-break: break-all;
        }

        div {
          position: absolute;
          left: 0;
          right: 0;
          top: ${pwd ? 0 : '15px'};
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        :global(.primary) {
          margin-top: ${space.spacing(4)};
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </App>
  )
}

Secret.getInitialProps = async ({
  query: { jwk, id, pwd }
}: NextPageContext) => {
  return { jwk, id, pwd }
}

export default Secret
