export class Keychain {
  async generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, [
      'encrypt',
      'decrypt'
    ])
  }

  async importKey(key: string): Promise<CryptoKey> {
    const jwk: JsonWebKey = {
      alg: 'A256GCM',
      ext: true,
      k: key,
      key_ops: ['encrypt', 'decrypt'],
      kty: 'oct'
    }

    return crypto.subtle.importKey('jwk', jwk, 'AES-GCM', true, [
      'encrypt',
      'decrypt'
    ])
  }

  async exportKey(key: CryptoKey): Promise<JsonWebKey> {
    return crypto.subtle.exportKey('jwk', key)
  }

  encodeMessage(message: string): Uint8Array {
    const enc = new TextEncoder()
    return enc.encode(message)
  }

  async encryptMessage(
    key: CryptoKey,
    message: string
  ): Promise<{ cipherText: ArrayBuffer; iv: ArrayBuffer }> {
    const encoded: Uint8Array = this.encodeMessage(message)
    const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12))
    const cipherText: ArrayBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    )

    return { cipherText, iv }
  }

  async decryptMessage(
    key: CryptoKey,
    iv: ArrayBuffer,
    cipheText: ArrayBuffer
  ): Promise<string> {
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      cipheText
    )
    const dec = new TextDecoder()

    return dec.decode(decrypted)
  }
}
