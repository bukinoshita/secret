'use strict'

export const encrypt = async plainText => {
  const ptUtf8 = new TextEncoder().encode(plainText)
  const pwUtf8 = new TextEncoder().encode(process.env.SECRET)
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8)

  const iv = crypto.getRandomValues(new Uint8Array(12))
  const alg = { name: 'AES-GCM', iv }
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, [
    'encrypt'
  ])
  const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUtf8)

  return { ctBuffer, iv }
}

export const decrypt = async ({ ctBuffer, iv }) => {
  const pwUtf8 = new TextEncoder().encode(process.env.SECRET)
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8)
  const alg = { name: 'AES-GCM', iv }
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, [
    'decrypt'
  ])
  const ptBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer)
  const plaintext = new TextDecoder().decode(ptBuffer)

  return plaintext
}
