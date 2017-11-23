'use strict'

import React, { Component } from 'react'
import Router from 'next/router'

import Page from './../layouts/page'

import Button from './../components/button'

import { colors, typography, phone } from './../theme'

import api from './../services/api'

class Home extends Component {
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
      return api
        .post('/secret', { message, passphrase })
        .then(({ uid }) => {
          this.setState({ requesting: false })
          Router.push(`/secret?uid=${uid}`)
        })
        .catch(err => {
          this.setState({ requesting: false })
          console.log(err)
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
      <fieldset>
        <input
          type="text"
          placeholder="Your passphrase"
          name="passphrase"
          value={passphrase}
          onChange={this.onInputChange}
          autoFocus={true}
        />

        <style jsx>{`
          fieldset {
            border: 0;
          }

          input {
            width: 100%;
            resize: none;
            background-color: transparent;
            border: 1px solid ${colors.gray};
            padding: 15px;
            font-size: ${typography.f12};
            color: ${colors.white};
            margin-top: 15px;
            outline: none;
            font-weight: ${typography.semibold};
            transition: all 200ms;
          }

          input::-webkit-input-placeholder {
            color: ${colors.gray};
          }

          input::-moz-placeholder {
            color: ${colors.gray};
          }

          input:-ms-input-placeholder {
            color: ${colors.gray};
          }

          input:-moz-placeholder {
            color: ${colors.gray};
          }

          input:focus {
            border-color: ${colors.white};
          }
        `}</style>
      </fieldset>
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
        <form onSubmit={this.onSubmit}>
          <textarea
            placeholder="Your secret..."
            name="message"
            value={message}
            onChange={this.onInputChange}
            autoFocus={true}
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

          textarea {
            width: 100%;
            resize: none;
            min-height: 100px;
            background-color: transparent;
            border: 1px solid ${colors.gray};
            padding: 15px;
            font-size: ${typography.f12};
            color: ${colors.white};
            outline: none;
            font-weight: ${typography.semibold};
            transition: all 200ms;
          }

          textarea::-webkit-input-placeholder {
            color: ${colors.gray};
          }

          textarea::-moz-placeholder {
            color: ${colors.gray};
          }

          textarea:-ms-input-placeholder {
            color: ${colors.gray};
          }

          textarea:-moz-placeholder {
            color: ${colors.gray};
          }

          textarea:focus {
            border-color: ${colors.white};
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

export default Home
