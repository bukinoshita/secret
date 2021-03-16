import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDecrypt } from 'hooks/use-decrypt/use-decrypt';
import useSWR from 'swr';
import fetcher from 'utils/fetch/fetch';
import { Hero } from 'components/hero/hero';
import { Button } from 'components/button/button';

const Secret = () => {
  const router = useRouter();
  const [decrypt] = useDecrypt();
  const [secret, setSecret] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, error } = useSWR<{ iv: string; cipherText: string }>(
    shouldFetch && '/api/get-secret/' + router.query.id,
    fetcher,
  );

  const decryptSecret = async () => {
    const decryptedSecret = await decrypt(
      data.iv,
      data.cipherText,
      router.query.jwk,
    );

    setSecret(decryptedSecret);
  };

  useEffect(() => {
    async function revealSecret() {
      if (data) {
        await decryptSecret();
        setShouldFetch(false);
      }
    }

    revealSecret();
  }, [data]);

  const onReveal = async () => {
    setShouldFetch(true);
  };

  return (
    <div>
      <Hero className="mb-10" />

      {error ? (
        <span className="bg-red-400 text-red-600 bg-opacity-10 py-2 px-4 rounded-sm">
          {error.message}
        </span>
      ) : (
        <>
          {secret ? (
            <strong>{secret}</strong>
          ) : (
            <Button onClick={onReveal}>Reveal the secret</Button>
          )}
        </>
      )}
    </div>
  );
};

export default Secret;
