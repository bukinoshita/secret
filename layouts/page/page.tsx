import React from 'react'

import { Colors, space } from 'ui/theme'

export const Page = ({ children }: any) => {
  return (
    <>
      <header>
        <svg width="40" height="40" viewBox="0 0 400 400" fill="none">
          <rect width="400" height="400" rx="100" fill="black" />
          <circle cx="130" cy="132" r="30" fill="white" />
          <circle cx="130" cy="272" r="30" fill="white" />
          <circle cx="270" cy="128" r="30" fill="white" />
          <circle cx="270" cy="272" r="30" fill="white" />
        </svg>
      </header>

      {children}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: ${Colors.Black};
          font-size: 13px;
        }
      `}</style>

      <style jsx>{`
        header {
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: ${space.spacing(7)};
          padding-right: ${space.spacing(7)};
          margin-bottom: ${space.spacing(10)};
        }
      `}</style>
    </>
  )
}
