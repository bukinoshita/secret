import React, { Fragment, PureComponent } from 'react'

import { Colors, radius, spacing } from 'ui/theme'

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
              background-color: ${Colors.White_Lilac};
              border-radius: ${radius.large};
              border: none;
              resize: none;
              height: 200px;
              padding: ${spacing.medium};
              font-size: 13px;
              line-height: 20px;
              color: ${Colors.Black};
            }

            textarea::-webkit-input-placeholder {
              color: ${Colors.Storm_Gray};
            }

            textarea:-moz-placeholder {
              color: ${Colors.Storm_Gray};
            }

            textarea::-moz-placeholder {
              color: ${Colors.Storm_Gray};
            }

            textarea:-ms-input-placeholder {
              color: ${Colors.Storm_Gray};
            }

            textarea::placeholder {
              color: ${Colors.Storm_Gray};
            }
          `}
        </style>
      </Fragment>
    )
  }
}
