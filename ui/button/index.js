// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI
import theme from '../theme'

class Button extends PureComponent {
  render() {
    const { children, type, onClick } = this.props

    return (
      <button type={type} onClick={onClick}>
        {children}

        <style jsx>{`
          button {
            padding: ${theme.spacing.medium} ${theme.spacing.xxxLarge};
            font-size: ${theme.typography.h600.fontSize};
            font-weight: ${theme.typography.h600.fontWeight};
            line-height: ${theme.typography.h600.lineHeight};
            text-transform: uppercase;
            cursor: pointer;
            border-radius: ${theme.radius};
            background-color: ${theme.colors.white};
            color: ${theme.colors.black};
          }
        `}</style>
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func
}

export default Button
