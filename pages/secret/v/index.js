// Packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { decode } from 'base64-arraybuffer'
import parser from 'ua-parser-js'
import { Choose } from 'react-extras'

// Layouts
import Page from '../../../layouts/page'

// Components
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Back from '../../../components/back'

// UI
import theme from '../../../ui/theme'

// Services
import api from '../../../services/api'
import { decrypt } from '../../../services/crypto'

class SecretView extends Component {
  static async getInitialProps({ req, query }) {
    const parsedUA = parser(req.headers['user-agent'])
    const isBrowser = Boolean(parsedUA.browser.name)

    if (isBrowser) {
      try {
        const { canary } = await api(`/canary/${query.id}`)

        return { canary }
      } catch (error) {
        console.error({ error })
        return {}
      }
    }
  }

  constructor() {
    super()

    this.state = {
      secret: '',
      decrypted: false,
      error: false
    }
  }

  async componentDidMount() {
    const { canary } = this.props

    if (canary && canary.ctBuffer && canary.iv) {
      const ctBuffer = decode(canary.ctBuffer)
      const iv = decode(canary.iv)
      const secret = await decrypt(ctBuffer, iv)

      return this.setState({ secret, decrypted: true })
    }

    this.setState({ error: true })
  }

  render() {
    const { secret, error, decrypted } = this.state

    return (
      <Page>
        <Header />
        <Back />

        <Choose>
          <Choose.When condition={Boolean(secret && !error && decrypted)}>
            <p>{secret}</p>
          </Choose.When>

          <Choose.When condition={Boolean(!error && !decrypted)}>
            <p>Decrypting secret...</p>
          </Choose.When>

          <Choose.Otherwise>
            <p>Secret does not exist anymore.</p>
          </Choose.Otherwise>
        </Choose>

        <Footer />

        <style jsx>{`
          p {
            font-size: ${theme.typography.paragraph.fontSize};
            font-weight: ${theme.typography.paragraph.fontWeight};
            line-height: ${theme.typography.paragraph.lineHeight};
            text-align: center;
          }
        `}</style>
      </Page>
    )
  }
}

SecretView.propTypes = {
  canary: PropTypes.shape
}

export default SecretView
