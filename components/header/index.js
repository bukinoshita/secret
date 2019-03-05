// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// Components
import Logo from '../logo'

class Header extends PureComponent {
  render() {
    return (
      <header>
        <Link href="/" prefetch>
          <a>
            <Logo />
          </a>
        </Link>

        <style jsx>{`
          header {
            display: flex;
            justify-content: space-between;
            height: 200px;
            align-items: center;
            padding-left: 150px;
            padding-right: 150px;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
