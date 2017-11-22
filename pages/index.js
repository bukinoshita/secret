'use strict'

import React, { Component } from 'react'
import Router from 'next/router'

import api from './../services/api'

import Page from './../layouts/page'

import { colors, typography, phone } from './../theme'

class Home extends Component {
  constructor() {
    super()

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = { message: '' }
  }

  onInputChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({ [name]: value })
  }

  onSubmit(event) {
    event.preventDefault()

    const { message } = this.state

    if (message.length >= 1) {
      return api
        .post('/secret', { message })
        .then(({ uid }) => {
          Router.push(`/secret?uid=${uid}`)
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    const { message } = this.state

    return (
      <Page>
        <form onSubmit={this.onSubmit}>
          <textarea
            placeholder="Your secret..."
            name="message"
            value={message}
            onChange={this.onInputChange}
          />

          <button type="submit">Create</button>
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
            min-height: 150px;
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

          button {
            display: inline-block;
            background-color: ${colors.white};
            color: ${colors.black};
            border: 0;
            border-radius: 0;
            padding: 12px 80px;
            font-size: ${typography.f10};
            text-transform: uppercase;
            font-weight: ${typography.bold};
            margin: 30px auto;
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
            form {
              max-width: 100%;
            }

            button {
              width: 100%;
              display: block;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
