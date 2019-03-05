// Packages
import React, { Component } from 'react'
import { autoBind } from 'react-extras'
import { encode } from 'base64-arraybuffer'
import Router from 'next/router'

// Layouts
import Page from '../layouts/page'

// UI
import Textarea from '../ui/textarea'
import Button from '../ui/button'
import theme from '../ui/theme'

// Services
import api from '../services/api'
import { encrypt } from '../services/crypto'

class Home extends Component {
  constructor() {
    super()

    autoBind(this)

    this.state = { secret: '' }
  }

  async onFormSubmit(e) {
    e.preventDefault()

    const { secret } = this.state

    try {
      const crypto = await encrypt(secret)
      const ctBuffer = encode(crypto.ctBuffer)
      const iv = encode(crypto.iv)
      const { uid } = await api.post('/canary', { ctBuffer, iv })

      Router.push(`/secret?uid=${uid}`)
    } catch (error) {
      console.error({ error })
    }
  }

  onSecretChange(e) {
    const { target } = e
    const { value } = target

    this.setState({ secret: value })
  }

  render() {
    const { secret } = this.state

    return (
      <Page>
        <h1>
          Secret helps you to send a message through a safe, private, and encrypted link that
          <br />
          automatically expires to ensure your stuff does not remain online forever
        </h1>

        <form onSubmit={this.onFormSubmit}>
          <Textarea
            name="secret"
            label="Create your secret"
            placeholder="Type your secret here"
            value={secret}
            onChange={this.onSecretChange}
          />

          <Button type="submit">Create secret</Button>
        </form>

        <style jsx>{`
          h1 {
            font-size: ${theme.typography.title.fontSize};
            font-weight: ${theme.typography.title.fontWeight};
            line-height: ${theme.typography.title.lineHeight};
            text-align: center;
            margin-bottom: ${theme.spacing.xxxLarge};
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
