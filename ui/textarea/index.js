// Packages
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI
import theme from '../theme'

class Textarea extends PureComponent {
  render() {
    const { name, label, placeholder, value, onChange } = this.props

    return (
      <fieldset>
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus
        />

        <style jsx>{`
          fieldset {
            margin-bottom: ${theme.spacing.large};
            border: 0;
          }

          label {
            font-size: ${theme.typography.h500.fontSize};
            font-weight: ${theme.typography.h500.fontWeight};
            line-height: ${theme.typography.h500.lineHeight};
            margin-bottom: ${theme.spacing};
            display: block;
          }

          textarea {
            width: 100%;
            min-height: 200px;
            border: 1px solid ${theme.colors.black};
            background-color: rgba(255, 255, 255, 0.075);
            border-radius: ${theme.radius};
            font-size: ${theme.typography.paragraph.fontSize};
            font-weight: ${theme.typography.paragraph.fontWeight};
            line-height: ${theme.typography.paragraph.lineHeight};
            color: ${theme.colors.white};
            padding: ${theme.spacing.large};
            resize: none;
            outline: transparent;
          }
        `}</style>
      </fieldset>
    )
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Textarea
