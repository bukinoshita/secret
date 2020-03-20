import { useState } from 'react'
import base64ArrayBuffer from 'base64-arraybuffer'

import { Keychain } from 'utils/keychain'

export function useEncrypt(): any {
  const [keys, setKeys] = useState<any>({})
  const keychain = new Keychain()

  const encrypt = async (text: string) => {
    const key: CryptoKey = await keychain.generateKey()
    const { k: cipherKey }: JsonWebKey = await keychain.exportKey(key)
    const {
      cipherText,
      iv
    }: {
      cipherText: ArrayBuffer
      iv: ArrayBuffer
    } = await keychain.encryptMessage(key, text)

    setKeys({
      ...keys,
      cipherKey,
      cipherText: base64ArrayBuffer.encode(cipherText),
      iv: base64ArrayBuffer.encode(iv)
    })

    return {
      ...keys,
      cipherKey,
      cipherText: base64ArrayBuffer.encode(cipherText),
      iv: base64ArrayBuffer.encode(iv)
    }
  }

  return [encrypt, keys]
}

export function useDecrypt(): any {
  const [secret, setSecret] = useState<string>('')
  const keychain = new Keychain()

  async function decrypt(base64Iv: any, base64CipherText: any, jwk: any) {
    const key = await keychain.importKey(jwk)
    const iv = base64ArrayBuffer.decode(base64Iv)
    const cipherText = base64ArrayBuffer.decode(base64CipherText)
    const secret = await keychain.decryptMessage(key, iv, cipherText)

    setSecret(secret)
    return secret
  }

  return [decrypt, secret]
}
