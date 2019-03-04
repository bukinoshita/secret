// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import theme from '../../ui/theme'

class Back extends PureComponent {
  render() {
    return (
      <Link href="/" prefetch>
        <a>
          <div>Back to home</div>

          <style jsx>{`
            div {
              position: fixed;
              top: 24px;
              right: 24px;
              display: block;
              background-color: ${theme.colors.white};
              padding: ${theme.spacing} ${theme.spacing.medium};
              font-size: ${theme.typography.h500.fontSize};
              font-weight: ${theme.typography.h500.fontWeight};
              line-height: ${theme.typography.h500.lineHeight};
              border-radius: ${theme.radius};
              box-shadow: 0 2px 20px rgba(255, 255, 255, 0.25);
              cursor: pointer;
              transition: 0.25s;
            }

            div:hover {
              box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
            }

            a {
              color: ${theme.colors.black};
            }
          `}</style>
        </a>
      </Link>
    )
  }
}

export default Back
