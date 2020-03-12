import { useRouter } from 'next/router'
import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

import pkg from '../../package.json'

import { Page } from 'layouts/page'

import { Badge } from 'ui/badge'
import { Colors, radius, spacing } from 'ui/theme'
import { IconCommand, IconCode, IconSlack } from 'ui/icon'

export const App = ({ children }: any) => {
  const { asPath } = useRouter()
  const isActive = (route: string) => classnames({ 'is-active': asPath === route })

  return (
    <Page>
      <main>
        <h1>{pkg.name}</h1>
        <h2>{pkg.description}</h2>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={isActive('/')} href="/">
                  <IconCommand style={{ marginRight: spacing.small }} />
                  Web
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cli">
                <a className={isActive('/cli')} href="/cli">
                  <IconCode style={{ marginRight: spacing.small }} />
                  Command line
                  <Badge style={{ marginLeft: spacing.medium }}>New</Badge>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/slack">
                <a className={isActive('/slack')} href="/slack">
                  <IconSlack style={{ marginRight: spacing.small }} />
                  Slack
                  <Badge style={{ marginLeft: spacing.medium }}>New</Badge>
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </main>

      <style jsx={true}>{`
        main {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding-left: ${spacing.large};
          padding-right: ${spacing.large};
        }

        h1 {
          font-size: 30px;
          font-weight: 700;
          text-transform: capitalize;
        }

        h2 {
          margin-top: ${spacing.default};
          margin-bottom: ${spacing.xxLarge};
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          max-width: 425px;
        }

        nav {
          margin-bottom: ${spacing.xLarge};
        }

        li {
          display: inline-block;
          margin-right: ${spacing.medium};
          vertical-align: middle;
        }

        a {
          background-color: ${Colors.White_Lilac};
          border-radius: ${radius.large};
          padding: ${spacing.default};
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
