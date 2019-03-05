// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI
import theme from '../../ui/theme'

class Logo extends PureComponent {
  render() {
    const { size, color } = this.props

    return (
      <svg width={size} viewBox="0 0 75 75">
        <defs />
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-399.000000, -100.000000)" fill={color}>
            <g>
              <g transform="translate(212.000000, 100.000000)">
                <g>
                  <g transform="translate(186.000000, 0.000000)">
                    <path d="M29,10 C26.2385763,10 24,7.76142375 24,5 C24,2.23857625 26.2385763,0 29,0 C31.7614237,0 34,2.23857625 34,5 C34,7.76142375 31.7614237,10 29,10 Z M51,10 C48.2385763,10 46,7.76142375 46,5 C46,2.23857625 48.2385763,0 51,0 C53.7614237,0 56,2.23857625 56,5 C56,7.76142375 53.7614237,10 51,10 Z M29,32 C26.2385763,32 24,29.7614237 24,27 C24,24.2385763 26.2385763,22 29,22 C31.7614237,22 34,24.2385763 34,27 C34,29.7614237 31.7614237,32 29,32 Z M51,32 C48.2385763,32 46,29.7614237 46,27 C46,24.2385763 48.2385763,22 51,22 C53.7614237,22 56,24.2385763 56,27 C56,29.7614237 53.7614237,32 51,32 Z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

Logo.defaultProps = {
  size: '75px',
  color: theme.colors.white
}

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default Logo
