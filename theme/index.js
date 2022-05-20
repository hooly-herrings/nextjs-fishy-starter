import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  // Typography
  fonts: {
    heading: `"Noto Sans Display", ${base.fonts?.heading}`,
    body: `"Noto Sans Display", ${base.fonts?.heading}`,
  },
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '20px',
    lg: '26px',
    xl: '33px',
    '2xl': '51px',
    '3xl': '73px',
    '4xl': '92px',
    '5xl': '128px',
    '6xl': '164px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  components: {
    Heading: {
      baseStyle: {
        color: 'headings',
        fontSixe: '2xl',
      },
      sizes: {
        '6xl': {
          fontSize: '6xl',
          lineHeight: 1.5,
        },
        '5xl': {
          fontSize: '5xl',
          lineHeight: 1.5,
        },
        '4xl': {
          fontSize: '4xl',
          lineHeight: 1.5,
        },
        '3xl': {
          fontSize: '3xl',
          lineHeight: 1.5,
        },
        '2xl': {
          fontSize: '2xl',
          lineHeight: 2,
        },
        xl: {
          fontSize: 'xl',
          lineHeight: 2,
        },
        lg: {
          fontSize: 'lg',
          lineHeight: 2,
        },
        md: { fontSize: 'md', lineHeight: 2 },
        sm: { fontSize: 'sm', lineHeight: 2 },
        xs: { fontSize: 'xs', lineHeight: 2 },
      },
    },
    Text: {
      baseStyle: {
        color: 'ink',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: 2,
      },
    },
  },
})

export default theme
