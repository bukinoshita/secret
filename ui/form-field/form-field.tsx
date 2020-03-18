import React from 'react'

import { space, Weight, Colors } from 'ui/theme'

import { FormFieldProps } from './form-field.types'

export const FormField = ({
  children,
  description,
  style,
  title
}: FormFieldProps) => {
  return (
    <div className="form-field" style={style}>
      <div>
        <h3 className="form-field__title">{title}</h3>
        <p className="form-field__description">{description}</p>
      </div>

      <div className="form-field--right">{children}</div>

      <style jsx>{`
        .form-field {
          display: grid;
          align-items: center;
          justify-content: space-between;
          grid-template-columns: 1fr 0.6fr;
        }

        .form-field__title {
          font-size: 13px;
          font-weight: ${Weight.Medium};
          color: ${Colors.Black};
          margin-bottom: ${space.spacing(2)};
        }

        .form-field__description {
          font-size: 11px;
          color: ${Colors.Storm_Gray};
          line-height: 18px;
        }

        .form-field--right {
          text-align: right;
        }
      `}</style>
    </div>
  )
}
