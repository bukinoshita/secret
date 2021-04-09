import { Button } from 'components/button/button';
import { Hero } from 'components/hero/hero';
import { TextInput } from 'components/text-input/text-input';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import copy from 'copy-text-to-clipboard';

const S: FC = () => {
  const router = useRouter();
  const [url, setURL] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (router.query && location) {
      setURL(`${location.origin}/s/${router.query.id}/${router.query.jwk}`);
    }
  }, [router.query]);

  const onCopy = (): void => {
    if (url) {
      copy(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <div>
      <Hero className="mb-10" />

      {url && (
        <TextInput
          label="Secret URL"
          name="secretURL"
          id="secretURL"
          value={url}
          readOnly
          hint="Copy the URL above and share it with someone you want."
        />
      )}

      <Button onClick={onCopy} className="mt-10">
        {isCopied ? 'Copied' : 'Copy URL'}
      </Button>
    </div>
  );
};

export default S;
