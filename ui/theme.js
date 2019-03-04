const theme = {}

theme.typography = {
  h100: {
    fontSize: '42px',
    lineHeight: '44px',
    fontWeight: '700'
  },
  h200: {
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: '700'
  },
  h300: {
    fontSize: '26px',
    lineHeight: '32px',
    fontWeight: '500'
  },
  h400: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '500'
  },
  h500: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '700'
  },
  h600: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '700'
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    marginBottom: '12px'
  },
  caption: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500'
  }
}

theme.shadow = Object.assign('0 2px 6px rgba(0, 0, 0, .16)', {
  small: '0 1px 1px rgba(0, 0, 0, .16)',
  medium: '0 8px 10px rgba(0, 0, 0, .16)',
  large: '0 24px 32px rgba(0, 0, 0, .16)'
})

theme.spacing = Object.assign('8px', {
  small: '4px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '40px',
  xxxLarge: '48px'
})

theme.responsive = {
  phone: 'screen and (max-width: 580px)'
}

theme.radius = Object.assign('3px', {
  small: '2px',
  medium: '4px',
  large: '6px',
  rounded: '50%'
})

theme.colors = {
  black: '#000000',
  white: '#ffffff'
}

export default theme
