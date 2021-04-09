import { useState } from 'react';
import base64ArrayBuffer from 'base64-arraybuffer';
import { Keychain } from 'utils/keychain/keychain';

export function useEncrypt(): any {
  const [keys, setKeys] = useState({});
  const keychain = new Keychain();

  const encrypt = async (text: string) => {
    const key: CryptoKey = await keychain.generateKey();
    const { k: cipherKey }: JsonWebKey = await keychain.exportKey(key);
    const {
      cipherText,
      iv,
    }: {
      cipherText: ArrayBuffer;
      iv: ArrayBuffer;
    } = await keychain.encryptMessage(key, text);

    setKeys({
      ...keys,
      cipherKey,
      cipherText: base64ArrayBuffer.encode(cipherText),
      iv: base64ArrayBuffer.encode(iv),
    });

    return {
      ...keys,
      cipherKey,
      cipherText: base64ArrayBuffer.encode(cipherText),
      iv: base64ArrayBuffer.encode(iv),
    };
  };

  return [encrypt, keys];
}
