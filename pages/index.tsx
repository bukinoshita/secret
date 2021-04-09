import { Button } from 'components/button/button';
import { Hero } from 'components/hero/hero';
import { Textarea } from 'components/textarea/textarea';
import { useEncrypt } from 'hooks/use-encrypt/use-encrypt';
import React, { FC, FormEvent, useState } from 'react';
import fetch from 'utils/fetch/fetch';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const router = useRouter();
  const [secret, setSecret] = useState('');
  const [encrypt] = useEncrypt();
  const [isRequesting, setAsIsRequesting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAsIsRequesting(true);
    const { iv, cipherText, cipherKey } = await encrypt(secret);
    const { data: id } = await fetch('/api/secret', {
      method: 'POST',
      body: JSON.stringify({ iv, cipherText }),
    });

    const URL = `/s/${id}?jwk=${cipherKey}`;

    setAsIsRequesting(false);

    router.push(URL);
  };

  return (
    <div>
      <Hero className="mb-16" />

      <form onSubmit={onSubmit}>
        <Textarea
          placeholder="Write your secret..."
          value={secret}
          onChange={(event) => setSecret(event.target.value)}
        />

        <div className="flex justify-end mt-4">
          <Button type="submit" disabled={secret.length === 0 || isRequesting}>
            Create Secret
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
