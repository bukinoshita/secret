'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import copy from 'copy-text-to-clipboard'

import Page from './../layouts/page'

import { colors, typography, phone } from './../theme'

class Secret extends Component {
  constructor() {
    super()

    this.copyUrl = this.copyUrl.bind(this)

    this.state = { show: false }
  }

  copyUrl() {
    const { uid } = this.props.url.query

    copy(`${process.env.APP}/s/${uid}`)

    this.setState({ show: true })
  }

  render() {
    const { uid } = this.props.url.query
    const { show } = this.state
    const hasClass = show ? 'visible' : ''

    return (
      <Page>
        <section>
          <label>Your link:</label>
          <h3 className={hasClass}>copied</h3>
          <h1 onClick={this.copyUrl}>{`${process.env.APP}/s/${uid}`}</h1>

          <p>
            Click on the link and send to the person or{' '}
            <Link prefetch href="/">
              <span>create a new secret</span>
            </Link>
          </p>
        </section>

        <style jsx>{`
          section {
            text-align: center;
          }

          label {
            color: ${colors.white};
            text-transform: uppercase;
            display: block;
            font-weight: ${typography.bold};
            font-size: ${typography.f12};
          }

          h3 {
            color: ${colors.gray};
            font-size: ${typography.f12};
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            margin-top: 18px;
            font-weight: ${typography.semibold};
            opacity: 0;
            transition: all 0.2s;
          }

          .visible {
            opacity: 1;
            margin-top: 8px;
          }

          h1 {
            color: ${colors.gray};
            font-size: ${typography.f14};
            font-weight: ${typography.semibold};
            padding: 15px 20px;
            border: 1px solid ${colors.gray};
            display: inline-block;
            margin: 30px auto 15px;
            transition: all 0.2s;
            cursor: pointer;
          }

          h1:hover {
            color: ${colors.white};
            border-color: ${colors.white};
          }

          span {
            border-bottom: 1px solid ${colors.gray};
            cursor: pointer;
            transition: all 0.2s;
          }

          span:hover {
            color: ${colors.white};
            border-color: ${colors.white};
          }

          p {
            color: ${colors.gray};
            font-size: ${typography.f12};
            text-transform: lowercase;
            line-height: 24px;
          }

          @media ${phone} {
            h1 {
              max-width: 100%;
              overflow-x: auto;
              font-size: ${typography.f12};
              margin: 15px auto;
            }

            .visible {
              margin-top: 0;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Secret
