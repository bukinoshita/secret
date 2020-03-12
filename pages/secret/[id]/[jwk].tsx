import { NextPageContext } from 'next'
import { Component } from 'react'
import { api } from 'utils/api'
import { Page } from 'layouts/page'
import { Button } from 'ui/button'
import { Keychain } from 'utils/keychain'
import base64ArrayBuffer from 'base64-arraybuffer'
import classnames from 'classnames'

class Secret extends Component<any, any> {
  keychain: Keychain

  static async getInitialProps({ query }: NextPageContext) {
    const {
      data: { iv, cipherText }
    } = await api(`http://localhost:3001/api/get-secret?id=${query.id}`)

    return { jwk: query.jwk, iv, cipherText }
  }

  constructor(props: any) {
    super(props)

    this.keychain = new Keychain()

    this.state = {
      secret: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      revealed: false
    }
  }

  onRevealSecret = async () => {
    const { iv: base64Iv, cipherText: base64CipherText, jwk } = this.props
    const key = await this.keychain.importKey(jwk)
    const iv = base64ArrayBuffer.decode(base64Iv)
    const cipherText = base64ArrayBuffer.decode(base64CipherText)
    const secret = await this.keychain.decryptMessage(key, iv, cipherText)

    this.setState({ secret, revealed: true })
  }

  render() {
    const { secret, revealed } = this.state
    const className = classnames({ revealed })

    return (
      <Page>
        <section>
          <div>
            <h1 className={className}>{secret}</h1>
            <Button onClick={this.onRevealSecret}>Reveal secret</Button>
          </div>
        </section>

        <style jsx={true}>{`
          section {
            text-align: center;
            margin-top: 240px;
          }

          h1 {
            font-weight: 400;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            font-size: 26px;
            margin-bottom: 40px;
            filter: blur(6px);
            min-height: 100px;
          }

          .revealed {
            filter: blur(0);
          }
        `}</style>
      </Page>
    )
  }
}

export default Secret
