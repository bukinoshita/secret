// Packages
import React, { PureComponent } from 'react'

// Root
import pkg from '../../package'

// UI
import theme from '../../ui/theme'

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div>
          <h1>{pkg.name}</h1>
          <h2>{pkg.description}.</h2>
        </div>

        <style jsx>{`
          header {
            height: 300px;
            align-items: center;
            display: flex;
            margin-bottom: 100px;
          }

          h1 {
            font-size: ${theme.typography.title.fontSize};
            font-weight: ${theme.typography.title.fontWeight};
            line-height: ${theme.typography.title.lineHeight};
          }

          h2 {
            font-size: ${theme.typography.h400.fontSize};
            font-weight: ${theme.typography.h400.fontWeight};
            line-height: ${theme.typography.h400.lineHeight};
          }
        `}</style>
      </header>
    )
  }
}

export default Header
