'use strict'

import React, { Component } from 'react'
import Link from 'next/link'

import Page from './../layouts/page'

import { colors, typography } from './../theme'

class About extends Component {
  render() {
    return (
      <Page>
        <section>
          <h2>01.</h2>

          <p>
            On the{' '}
            <Link prefetch href="/">
              <span>homepage</span>
            </Link>{' '}
            you can type your secret and click `create`.
          </p>

          <h2>02.</h2>

          <p>
            After you click the `create` button, we will generate an{' '}
            <strong>unique</strong> and <strong>encrypted</strong> link. You can
            copy this link and share it with someone.
          </p>

          <h2>03.</h2>

          <p>
            After the person you shared with opens the link, we will
            automatically delete the secret from the internet forever and your
            secret will still be a secret.
          </p>
        </section>

        <style jsx>{`
          section {
            max-width: 500px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          h2 {
            color: ${colors.white};
            font-weight: ${typography.regular};
            margin-bottom: 20px;
          }

          p {
            color: ${colors.gray};
            font-size: ${typography.f14};
            line-height: 24px;
            margin-bottom: 30px;
          }

          span {
            font-weight: ${typography.bold};
            color: ${colors.white};
            font-size: ${typography.f12};
            position: relative;
          }

          span:after {
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

          span:hover:after {
            opacity: 1;
            transform: scale(1, 1);
          }
        `}</style>
      </Page>
    )
  }
}

export default About
