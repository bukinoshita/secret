'use strict'

import React, { Component } from 'react'
import Link from 'next/link'
import parser from 'ua-parser-js'

import Page from './../../layouts/page'

import Button from './../../components/button'
import Input from './../../components/input'

import { colors, typography } from './../../theme'

import api from './../../services/api'

class S extends Component {
  static async getInitialProps({ query, req }) {
    const headers = parser(req.headers['user-agent'])

    if (headers.browser.name) {
      try {
        const data = await api.get(`/secret/${query.id}`)

        return { data, headers }
      } catch (err) {
        return { err }
      }
    }
  }

  constructor() {
    super()

    this.onInputChange = this.onInputChange.bind(this)
    this.revealSecret = this.revealSecret.bind(this)

    this.state = {
      hasPassphrase: false,
      passphrase: '',
      message: '',
      fetched: false,
      sFetched: false,
      fetching: false
    }
  }

  componentDidMount() {
    const { data } = this.props
    const hasPassphrase = data ? data.hasPassphrase : false

    if (data && data.secret && data.secret.message) {
      this.setState({ message: data.secret.message })
    }

    this.setState({ hasPassphrase, fetched: true })
  }

  onInputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  revealSecret(e) {
    e.preventDefault()
    const { id } = this.props.url.query
    const { passphrase } = this.state

    this.setState({ fetching: true })

    return api
      .get(`/secret/${id}?passphrase=${passphrase}`)
      .then(res => {
        const message = res.secret.message
        this.setState({ message, sFetched: true, fetching: false })
      })
      .catch(() =>
        this.setState({ sFetched: true, passphrase: '', fetching: false })
      )
  }

  render() {
    const { hasPassphrase, passphrase, message, fetched, fetching } = this.state
    const styles = this.state.sFetched ? { borderColor: 'red' } : null

    const passphraseInput = hasPassphrase ? (
      <div>
        <p>Shh... we cannot tell you the secret without the passphrase.</p>
        <form onSubmit={this.revealSecret}>
          <Input
            type="text"
            placeholder="Your passphrase"
            name="passphrase"
            value={passphrase}
            onChange={this.onInputChange}
            autoFocus={true}
            customStyle={styles}
          />
          <div>
            <Button type="submit" disabled={fetching}>
              Reveal the secret
            </Button>
          </div>
        </form>
        <style jsx>{`
          p {
            color: ${colors.gray};
            font-size: ${typography.f12};
            font-weight: ${typography.semibold};
            margin-top: 10px;
          }
        `}</style>
      </div>
    ) : (
      <h1>
        This secret does not exist anymore
        <style jsx>{`
          h1 {
            color: ${colors.white};
            font-size: ${typography.f14};
            font-weight: ${typography.semibold};
            line-height: 24px;
            margin: 30px auto 70px;
            transition: all 0.2s;
            max-width: 600px;
          }
        `}</style>
      </h1>
    )

    const showMessage = message ? (
      <div>
        <label>Your secret is:</label>
        <h1>{message}</h1>

        <p>
          <Link prefetch href="/">
            <span>create a secret</span>
          </Link>
        </p>

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
      </div>
    ) : (
      passphraseInput
    )

    const m = fetched ? (
      showMessage
    ) : (
      <p>
        loading...{' '}
        <style jsx>{`
          p {
            color: ${colors.white};
            font-size: ${typography.f14};
            font-weight: ${typography.semibold};
          }
        `}</style>
      </p>
    )

    return (
      <Page>
        <section>{m}</section>

        <style jsx>{`
          section {
            text-align: center;
          }
        `}</style>
      </Page>
    )
  }
}

export default S
