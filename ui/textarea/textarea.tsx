import React, { Fragment, PureComponent } from 'react'

import { colors, radius, spacing } from '../theme'

export class Textarea extends PureComponent<any> {
  render() {
    const { onChange, placeholder, value } = this.props

    return (
      <Fragment>
        <textarea placeholder={placeholder} value={value} onChange={onChange} />

        <style jsx={true}>
          {`
            textarea {
              width: 100%;
              background-color: ${colors.blueishLight};
              border-radius: ${radius.large};
              border: none;
              resize: none;
              height: 200px;
              padding: ${spacing.medium};
              font-size: 13px;
              line-height: 20px;
            }

            textarea::-webkit-input-placeholder {
              color: ${colors.blueishDarker};
            }

            textarea:-moz-placeholder {
              color: ${colors.blueishDarker};
            }

            textarea::-moz-placeholder {
              color: ${colors.blueishDarker};
            }

            textarea:-ms-input-placeholder {
              color: ${colors.blueishDarker};
            }

            textarea::placeholder {
              color: ${colors.blueishDarker};
            }
          `}
        </style>
      </Fragment>
    )
  }
}
