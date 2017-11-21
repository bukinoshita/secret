'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import parser from 'ua-parser-js'

import Page from './../../layouts/page'

import { colors, typography } from './../../theme'

import api from './../../services/api'

class S extends Component {
  static async getInitialProps({ query, req }) {
    const headers = parser(req.headers['user-agent'])

    if (headers.browser.name) {
      try {
        const { secret } = await api.get(`/secret/${query.id}`)

        return { secret, headers }
      } catch (err) {
        return { err }
      }
    }
  }

  render() {
    const { secret } = this.props

    const s = secret ? (
      <div>
        <label>The secret is</label>
        <h1>`{secret.message}`</h1>

        <style jsx>{`
          label {
            color: ${colors.white};
            text-transform: uppercase;
            display: block;
            font-weight: 600;
            font-size: ${typography.f12};
          }

          h1 {
            color: ${colors.gray};
            font-style: italic;
            font-size: ${typography.f14};
            font-weight: ${typography.bold};
            line-height: 24px;
            margin: 30px auto 70px;
            transition: all 0.2s;
            max-width: 600px;
          }
        `}</style>
      </div>
    ) : (
      <h1>
        This secret doesn't exist anymore
        <style jsx>{`
          h1 {
            color: ${colors.white};
            font-size: ${typography.f14};
            font-weight: ${typography.semibold};
            line-height: 24px;
            margin: 30px auto 70px;
            transition: all 0.2s;
            cursor: pointer;
            max-width: 600px;
          }
        `}</style>
      </h1>
    )

    return (
      <Page>
        <section>
          {s}

          <p>
            <Link prefetch href="/">
              <span>create a secret</span>
            </Link>
          </p>
        </section>

        <style jsx>{`
          section {
            text-align: center;
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
            font-size: 12px;
            text-transform: lowercase;
          }
        `}</style>
      </Page>
    )
  }
}

export default S
