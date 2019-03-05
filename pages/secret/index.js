// Packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { autoBind } from 'react-extras'
import copy from 'copy-text-to-clipboard'

// Layouts
import Page from '../../layouts/page'

// Components
import Header from '../../components/header'
import Footer from '../../components/footer'
import Back from '../../components/back'

// UI
import Button from '../../ui/button'
import theme from '../../ui/theme'

class SecretDetail extends Component {
  static getInitialProps({ req }) {
    const host =
      req && req.headers
        ? req.headers.host
        : typeof window === 'undefined'
        ? ''
        : window.location.hostname

    return { host }
  }

  constructor() {
    super()

    autoBind(this)
  }

  onCopyToClipboard() {
    const { router, host } = this.props
    const secretId = router.query.uid
    const secretUrl = `https://${host}/secret/v/${secretId}`

    copy(secretUrl)
  }

  render() {
    const { router, host } = this.props
    const secretId = router.query.uid
    const secretUrl = `https://${host}/secret/v/${secretId}`

    return (
      <Page>
        <Header />
        <Back />

        <label>Share your secret url</label>
        <div>
          <label>Your secret url:</label>
          {secretUrl}
        </div>
        <span>Anyone who has the link can see your secret if it's not passphrase protected.</span>

        <Button size="small" onClick={this.onCopyToClipboard}>
          Copy link to the clipboard
        </Button>

        <Footer />

        <style jsx>{`
          div {
            border: 1px solid ${theme.colors.white};
            display: inline-block;
            font-size: ${theme.typography.h500.fontSize};
            font-weight: ${theme.typography.h500.fontWeight};
            line-height: ${theme.typography.h500.lineHeight};
            border-radius: ${theme.radius};
            padding: ${theme.spacing.medium} ${theme.spacing.large};
            opacity: 0.5;
            width: 100%;
            transition: 0.25s;
            cursor: pointer;
            margin-top: ${theme.spacing};
            margin-bottom: ${theme.spacing};
            overflow: auto;
            white-space: nowrap;
          }

          div:hover {
            opacity: 1;
          }

          label {
            font-size: ${theme.typography.caption.fontSize};
            font-weight: ${theme.typography.caption.fontWeight};
            line-height: ${theme.typography.caption.lineHeight};
            text-transform: uppercase;
            margin-right: ${theme.spacing.medium};
            border-radius: ${theme.radius};
          }

          span {
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            margin-bottom: ${theme.spacing.xxxLarge};
            display: block;
          }
        `}</style>
      </Page>
    )
  }
}

SecretDetail.propTypes = {
  router: PropTypes.shape,
  host: PropTypes.string.isRequired
}

export default withRouter(SecretDetail)
