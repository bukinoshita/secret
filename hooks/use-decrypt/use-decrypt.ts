import { Keychain } from 'utils/keychain/keychain';
import base64ArrayBuffer from 'base64-arraybuffer';

export function useDecrypt(): any {
  const keychain = new Keychain();

  async function decrypt(base64Iv: any, base64CipherText: any, jwk: any) {
    const key = await keychain.importKey(jwk);
    const iv = base64ArrayBuffer.decode(base64Iv);
    const cipherText = base64ArrayBuffer.decode(base64CipherText);
    const secret = await keychain.decryptMessage(key, iv, cipherText);

    return secret;
  }

  return [decrypt];
}
