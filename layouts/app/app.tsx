import { useRouter } from 'next/router'
import classnames from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import pkg from '../../package.json'

import { Page } from 'layouts/page'

import { Badge } from 'ui/badge'
import { Colors, Radius, space } from 'ui/theme'
import { IconLayout, IconTerminal, IconSlack } from 'ui/icon'

export const App = ({ children }: any) => {
  const { asPath } = useRouter()
  const isActive = (route: string) =>
    classnames({ 'is-active': asPath === route })

  return (
    <Page>
      <Head>
        <title>
          {pkg.name} | {pkg.description}
        </title>

        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1>{pkg.name}</h1>
        <h2>{pkg.description}</h2>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={isActive('/')} href="/">
                  <IconLayout style={{ marginRight: space.spacing(1) }} />
                  Web
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cli">
                <a className={isActive('/cli')} href="/cli">
                  <IconTerminal style={{ marginRight: space.spacing(1) }} />
                  Command line
                  <Badge style={{ marginLeft: space.spacing(4) }}>New</Badge>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/slack">
                <a className={isActive('/slack')} href="/slack">
                  <IconSlack style={{ marginRight: space.spacing(1) }} />
                  Slack
                  <Badge style={{ marginLeft: space.spacing(4) }}>New</Badge>
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </main>

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

        nav {
          margin-bottom: ${space.spacing(7)};
        }

        li {
          display: inline-block;
          margin-right: ${space.spacing(4)};
          vertical-align: middle;
        }

        a {
          background-color: ${Colors.White_Lilac};
          border-radius: ${Radius.Large};
          padding: ${space.spacing(2)};
          color: ${Colors.Storm_Gray};
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: 0.25s ease-in-out;
        }

        .is-active {
          background-color: ${Colors.Black};
          color: ${Colors.White};
        }
      `}</style>
    </Page>
  )
}
