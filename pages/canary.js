'use strict'

import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { encode } from 'base64-arraybuffer'

import Page from './../layouts/page'

import Button from './../components/button'
import Input from './../components/input'

import { colors, typography, phone } from './../theme'

import api from './../services/api'
import { encrypt } from './../services/crypto'

class Canary extends Component {
  constructor() {
    super()

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.addPassphrase = this.addPassphrase.bind(this)

    this.state = {
      message: '',
      hasPassphrase: false,
      passphrase: '',
      requesting: false
    }
  }

  onInputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  onSubmit(event) {
    event.preventDefault()

    this.setState({ requesting: true })
    const { message, passphrase } = this.state

    if (message.length >= 1) {
      encrypt(message).then(({ ctBuffer, iv }) => {
        const ctBufferString = encode(ctBuffer)
        const ivString = encode(iv)

        return api
          .post('/canary', {
            passphrase,
            ctBuffer: ctBufferString,
            iv: ivString
          })
          .then(({ uid }) => {
            this.setState({ requesting: false })
            Router.push(`/secret?uid=${uid}&c=true`)
          })
          .catch(err => {
            this.setState({ requesting: false })
            console.log(err)
          })
      })
    }

    this.setState({ requesting: false })
  }

  addPassphrase() {
    this.setState({ hasPassphrase: true })
  }

  render() {
    const { message, hasPassphrase, passphrase, requesting } = this.state
    const passphraseInput = hasPassphrase ? (
      <Input
        type="text"
        placeholder="Your passphrase"
        name="passphrase"
        value={passphrase}
        onChange={this.onInputChange}
        autoFocus={true}
      />
    ) : (
      <span onClick={this.addPassphrase}>
        + add passphrase
        <style jsx>{`
          span {
            display: table;
            color: ${colors.gray};
            text-align: left;
            font-size: ${typography.f12};
            font-weight: ${typography.semibold};
            margin-top: 5px;
            cursor: pointer;
            transition: all 0.2s;
          }

          span:hover {
            color: ${colors.white};
          }
        `}</style>
      </span>
    )

    return (
      <Page>
        <h3>
          You are using{' '}
          <Link href="/about#canary">
            <span>Canary</span>
          </Link>.
          <Link href="/about#canary">
            <label>Learn more</label>
          </Link>
        </h3>

        <form onSubmit={this.onSubmit}>
          <Input
            placeholder="Your secret..."
            name="message"
            value={message}
            onChange={this.onInputChange}
            autoFocus={true}
            multiline={true}
          />

          {passphraseInput}

          <Button type="submit" disabled={requesting}>
            Create
          </Button>
        </form>

        <style jsx>{`
          form {
            max-width: 500px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          h3 {
            text-align: center;
            color: ${colors.white};
            display: block;
            font-size: ${typography.f14};
            text-transform: lowercase;
            margin-bottom: 30px;
            font-weight: ${typography.regular};
          }

          span {
            color: ${colors.pink};
            cursor: pointer;
            font-weight: ${typography.bold};
            position: relative;
          }

          span:after {
            content: '';
            height: 1px;
            background-color: ${colors.pink};
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

          label {
            margin-left: 5px;
            font-size: ${typography.f12};
            font-weight: ${typography.bold};
            cursor: pointer;
            color: ${colors.gray};
            transition: all 200ms;
          }

          label:hover {
            color: ${colors.white};
          }

          @media ${phone} {
            form {
              max-width: 100%;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Canary
