import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import * as Fathom from 'fathom-client';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Topnav } from 'components/topnav/topnav';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE, {
      includedDomains: ['getsecret.vercel.app'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Secret — Send a message through a safe, private, and encrypted link{' '}
        </title>

        <meta
          name="description"
          content="end a message through a safe, private, and encrypted link that automatically expires to ensure your stuff does not remain online forever"
        />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="apple-touch-icon" href="static/favicon.png" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Secret" />
        <meta
          property="og:description"
          content="send a message through a safe, private, and encrypted link that automatically expires to ensure your stuff does not remain online forever"
        />
        <meta
          name="twitter:image"
          content="https://getsecret.vercel.app/static/cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content="Secret" />
        <meta
          property="og:description"
          content="send a message through a safe, private, and encrypted link that automatically expires to ensure your stuff does not remain online forever"
        />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:url" content="https://getsecret.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>

      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Topnav />

        <main className="max-w-xl mx-auto -mt-20">
          <div className="flex items-center h-screen justify-center">
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
