import React, { useState, ChangeEvent, FormEvent } from 'react'
import base64ArrayBuffer from 'base64-arraybuffer'
import Router from 'next/router'

import { App } from 'layouts/app'

import { Button } from 'ui/button'
import { space } from 'ui/theme'
import { Textarea } from 'ui/textarea'

import { TYPE } from 'ui/button/button.types'

import { Keychain } from 'utils/keychain'
import { api } from 'utils/api'

const Home = () => {
  const [secret, onTypeSecret] = useState<string>('')
  const keychain = new Keychain()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const key: CryptoKey = await keychain.generateKey()
    const { k: cipherKey }: JsonWebKey = await keychain.exportKey(key)
    const {
      cipherText,
      iv
    }: { cipherText: ArrayBuffer; iv: ArrayBuffer } = await keychain.encryptMessage(key, secret)

    const {
      data: { id }
    } = await api.post('/api/create-secret', {
      iv: base64ArrayBuffer.encode(iv),
      cipherText: base64ArrayBuffer.encode(cipherText)
    })

    Router.push(`/secret/${id}/${cipherKey}`)
  }

  return (
    <App>
      <form onSubmit={onSubmit}>
        <Textarea
          placeholder="Write your secret..."
          value={secret}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onTypeSecret(event.target.value)}
        />

        <footer>
          <Button onClick={() => console.log('Options')} outline={true}>
            Options
          </Button>
          <Button type={TYPE.SUBMIT}>Create secret</Button>
        </footer>
      </form>

      <style jsx={true}>{`
        footer {
          display: grid;
          justify-content: end;
          grid-template-columns: 98px 135px;
          grid-column-gap: ${space.spacing(4)};
          align-items: center;
          margin-top: ${space.spacing(4)};
        }
      `}</style>
    </App>
  )
}

export default Home
