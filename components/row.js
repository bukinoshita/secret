'use strict'

import React from 'react'

export default ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 25px;
        padding-right: 25px;
      }
    `}</style>
  </div>
)
