import { useRouter } from 'next/router'
import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

import { IconLayout } from 'ui/icon'
import { Colors, Radius, Responsive, space } from 'ui/theme'

export const Navigation = () => {
  const { asPath } = useRouter()
  const isActive = (route: string) =>
    classnames({ 'is-active': asPath === route })

  return (
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
        {/*
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
         */}
      </ul>

      <style jsx>{`
        nav {
          margin-bottom: ${space.spacing(7)};
          display: none;
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

        @media ${Responsive.Small} {
          nav {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}
