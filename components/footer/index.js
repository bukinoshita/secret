// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <p>Copyright © 2019, Secret. All rights reserved.</p>

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

        <style jsx>{`
          footer {
            display: flex;
            justify-content: space-between;
            height: 200px;
            align-items: center;
            padding-left: 150px;
            padding-right: 150px;
          }

          p {
            font-size: ${theme.typography.paragraph.fontSize};
            font-weight: ${theme.typography.paragraph.fontWeight};
            line-height: ${theme.typography.paragraph.lineHeight};
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
