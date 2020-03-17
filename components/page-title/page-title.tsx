import React from 'react'

import { space, Weight } from 'ui/theme'

import { PageTitleProps } from './page-title.types'

export const PageTitle = ({ title, subtitle, center }: PageTitleProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <style jsx>{`
        h1 {
          font-size: 30px;
          font-weight: ${Weight.Bold};
          text-transform: capitalize;
          text-align: ${center ? 'center' : 'left'};
        }

        h2 {
          margin-top: ${space.spacing(2)};
          margin-bottom: ${space.spacing(9)};
          font-weight: ${Weight.Regular};
          font-size: 16px;
          line-height: 26px;
          max-width: 400px;
          text-align: ${center ? 'center' : 'left'};
          margin-left: ${center ? 'auto' : 'initial'};
          margin-right: ${center ? 'auto' : 'initial'};
        }
      `}</style>
    </section>
  )
}

PageTitle.defaultProps = {
  center: false
}
