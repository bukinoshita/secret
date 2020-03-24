import Head from 'next/head'
import React from 'react'

import { Page } from 'layouts/page'

import { space } from 'ui/theme'

import pkg from '../../package.json'

export const App = ({ children }: any) => {
  return (
    <Page>
      <Head>
        <title>
          {pkg.name} | {pkg.description}
        </title>

        <meta name="viewport" content="width=device-width, user-scalable=no" />

        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>

      <style jsx>{`
        main {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding-left: ${space.spacing(6)};
          padding-right: ${space.spacing(6)};
        }

        h1 {
          font-size: 30px;
          font-weight: 700;
          text-transform: capitalize;
        }

        h2 {
          margin-top: ${space.spacing(2)};
          margin-bottom: ${space.spacing(9)};
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          max-width: 425px;
        }
      `}</style>
    </Page>
  )
}
