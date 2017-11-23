'use strict'

import React, { Component } from 'react'
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
    const txt = show ? 'copied!' : 'copy link'

    return (
      <Page>
        <section>
          <label>Your link:</label>
          <h2>Do not open! Share your secret with a friend.</h2>
          <h1>{`${process.env.APP}/s/${uid}`}</h1>

          <p>
            <button onClick={this.copyUrl}>{txt}</button>
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

          h2 {
            color: ${colors.gray};
            font-size: ${typography.f12};
            font-weight: ${typography.semibold};
            margin-top: 10px;
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

          p {
            color: ${colors.gray};
            font-size: ${typography.f12};
            text-transform: lowercase;
            line-height: 24px;
          }

          button {
            display: inline-block;
            background-color: ${colors.white};
            color: ${colors.black};
            border: 0;
            border-radius: 0;
            padding: 12px 50px;
            font-size: ${typography.f10};
            text-transform: uppercase;
            font-weight: ${typography.bold};
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            cursor: pointer;
            outline: none;
            letter-spacing: 2px;
            transition: all 200ms;
          }

          button:focus {
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
          }

          @media ${phone} {
            h1 {
              max-width: 100%;
              overflow-x: auto;
              font-size: ${typography.f12};
              margin: 15px auto;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Secret
