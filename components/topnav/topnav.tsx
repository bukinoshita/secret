import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'components/button/button';
import { useRouter } from 'next/router';

export const Topnav: FC = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const showButton = router.pathname !== '/';

  return (
    <header className="mt-4 flex items-center justify-end">
      <div className="group flex items-center">
        <span className="opacity-0 group-hover:opacity-100 text-gray-500 duration-200 transition ease-in-out mr-2">
          {theme === 'light' ? 'Dark' : 'Light'} mode
        </span>

        <Button
          appearance="fade"
          size="icon"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </Button>
      </div>

      {showButton && (
        <Button
          className="ml-2"
          onClick={() => router.push('/')}
          appearance="secondary"
          size="small"
        >
          Create new secret
        </Button>
      )}
    </header>
  );
};
