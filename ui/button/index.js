// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI
import theme from '../theme'

class Button extends PureComponent {
  render() {
    const { children, size, type, onClick } = this.props
    const isSmall = size === 'small' && 'small'

    return (
      <button className={isSmall} type={type} onClick={onClick}>
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

          .small {
            padding: ${theme.spacing} ${theme.spacing.medium};
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
  size: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func
}

export default Button
