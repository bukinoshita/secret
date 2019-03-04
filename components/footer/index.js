// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <Link prefetch href="/">
              <span>create secret</span>
            </Link>
          </li>

          <li>
            <Link prefetch href="/about">
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link prefetch href="/help">
              <span>Help</span>
            </Link>
          </li>

          <li>
            <a href="https://github.com/bukinoshita/secret/releases/latest">
              <span>Releases</span>
            </a>
          </li>

          <li>
            <a href="https://github.com/bukinoshita/secret">
              <span>Github</span>
            </a>
          </li>
        </ul>

        <span>
          created by <a href="https://twitter.com/bukinoshita">@bukinoshita</a>
        </span>

        <style jsx>{`
          footer {
            text-align: center;
            position: absolute;
            bottom: ${theme.spacing.large};
            width: 100%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
          }

          span {
            color: ${theme.colors.gray};
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            text-align: center;
            display: block;
          }

          a {
            color: ${theme.colors.white};
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            position: relative;
          }

          li span:before {
            content: '';
            height: 1px;
            background-color: ${theme.colors.white};
            position: absolute;
            pointer-events: none;
            bottom: -4px;
            left: 0;
            right: 0;
            opacity: 0;
            transform: scale(0, 1);
            transition: all 200ms;
          }

          li span:hover:before {
            opacity: 1;
            transform: scale(1, 1);
          }

          ul {
            margin-bottom: 20px;
          }

          li {
            display: inline-block;
            margin-right: ${theme.spacing.small};
            padding-right: ${theme.spacing.small};
          }

          li:after {
            content: '/';
            color: ${theme.colors.gray};
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            margin-left: ${theme.spacing.small};
            padding-left: ${theme.spacing.small};
          }

          li:hover span {
            color: ${theme.colors.white};
          }

          li:last-child {
            margin-right: 0;
            padding-right: 0;
          }

          li:last-child:after {
            content: '';
          }

          li span {
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            text-transform: lowercase;
            cursor: pointer;
            position: relative;
            display: inline-block;
            transition: all 200ms;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
