import { Logo } from 'components/logo/logo';
import React, { FC } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

export interface HeroProps {
  className?: string;
}

export const Hero: FC<Readonly<HeroProps>> = ({ className }) => {
  const classNames = classnames(className);

  return (
    <header className={classNames}>
      <Link href="/">
        <a>
          <Logo className="lg:-ml-11" />
        </a>
      </Link>
      <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400 leading-relaxed">
        send a message through a safe, private, and encrypted link that
        automatically expires to ensure your stuff does not remain online
        forever.
      </p>
    </header>
  );
};
