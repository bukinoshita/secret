'use strict'

import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import Progress from 'nprogress'
import PropTypes from 'prop-types'

import Row from './../components/row'
import Logo from './../components/logo'

import pkg from './../package'
import { colors, typography } from './../theme'

let progress
const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

if (global.document) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const Page = ({ children }) => {
  return (
    <main>
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>

        <meta name="theme-color" content={colors.black} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content={pkg.keywords} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bukinoshita" />
        <meta name="twitter:creator" content="@bukinoshita" />
        <meta name="twitter:title" content={pkg.name} />
        <meta name="twitter:description" content={pkg.description} />
        <meta
          property="twitter:image:src"
          content={`https://getsecret.now.sh/static/cover.png`}
        />

        <meta property="og:url" content="https://getsecret.now.sh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pkg.name} />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:site_name" content={pkg.name} />

        <link rel="apple-touch-icon" href="/static/icon.png" />
        <link rel="icon" href="/static/icon.png" type="image/png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-110046805-1"
        />
        <script src="/static/analytics.js" />
      </Head>

      <Row>
        <header>
          <Link prefetch href="/">
            <div>
              <Logo />

              <p>
                send a message through a safe, private, and encrypted link that
                automatically expires to ensure your stuff does not remain
                online forever.
              </p>
            </div>
          </Link>
        </header>

        {children}

        <footer>
          <span>
            created by{' '}
            <a href="https://twitter.com/bukinoshita">@bukinoshita</a> /{' '}
            <a href="https://github.com/bukinoshita/secret">github</a>
          </span>
        </footer>
      </Row>

      <style jsx>{`
        main {
          position: relative;
          min-height: 100vh;
        }

        header {
          text-align: center;
          height: 350px;
          display: flex;
          align-items: center;
        }

        header div {
          width: 100%;
          cursor: pointer;
        }

        p {
          color: ${colors.gray};
          margin-top: 20px;
          font-size: ${typography.f14};
          line-height: 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        footer {
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          text-align: center;
        }

        span {
          color: ${colors.gray};
          font-size: ${typography.f12};
          text-align: center;
          display: block;
        }

        a {
          color: ${colors.white};
          font-weight: ${typography.bold};
          position: relative;
        }

        a:after {
          content: '';
          height: 1px;
          background-color: ${colors.white};
          position: absolute;
          pointer-events: none;
          bottom: -4px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }

        a:hover:after {
          opacity: 1;
          transform: scale(1, 1);
        }
      `}</style>

      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          body {
            background-color: ${colors.black};
          }
          a {
            text-decoration: none;
          }
          li {
            list-style: none;
          }
          img {
            max-width: 100%;
          }
          #nprogress {
            pointer-events: none;
          }
          #nprogress .bar {
            background: ${colors.black};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${colors.black}, 0 0 5px ${colors.black};
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }
          svg {
            vertical-align: middle;
          }
        `}
      </style>
    </main>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
