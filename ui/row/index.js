// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI
import theme from '../theme'

class Row extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <div>
        {children}

        <style jsx>{`
          div {
            width: 100%;
            max-width: 750px;
            padding-left: ${theme.spacing.large};
            padding-right: ${theme.spacing.large};
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    )
  }
}

Row.propTypes = {
  children: PropTypes.any.isRequired
}

export default Row
