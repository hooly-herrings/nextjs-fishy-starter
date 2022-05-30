import { extendTheme, theme as base } from '@chakra-ui/react'

function responsive(
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
) {
  return [
    `${size}.0`,
    `${size}.1`,
    `${size}.2`,
    `${size}.3`,
    `${size}.4`,
    `${size}.5`,
  ]
}

const theme = extendTheme({
  // Typography
  fonts: {
    heading: `"Noto Sans Display", ${base.fonts?.heading}`,
    body: `"Noto Sans Display", ${base.fonts?.heading}`,
    deco: 'Bad Script',
  },
  fontSizes: {
    xs: '7px',
    sm: '10px',
    md: 'var(--allec--ts--content-fs)',
    lg: 'var(--allec--ts--h6-fs)',
    xl: 'var(--allec--ts--h5-fs)',
    '2xl': 'var(--allec--ts--h4-fs)',
    '3xl': 'var(--allec--ts--h3-fs)',
    '4xl': 'var(--allec--ts--h2-fs)',
    '5xl': 'var(--allec--ts--h1-fs)',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'var(--allec--ts--content-lh)',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
    xs: '7px',
    sm: '10px',
    md: 'var(--allec--ts--content-lh)',
    lg: 'var(--allec--ts--h6-lh)',
    xl: 'var(--allec--ts--h5-lh)',
    '2xl': 'var(--allec--ts--h4-lh)',
    '3xl': 'var(--allec--ts--h3-lh)',
    '4xl': 'var(--allec--ts--h2-lh)',
    '5xl': 'var(--allec--ts--h1-lh)',
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
        fontSize: '2xl',
      },
      sizes: {
        '5xl': {
          fontSize: 'var(--allec--ts--h1-fs)',
          lineHeight: 'var(--allec--ts--h1-lh)',
        },
        '4xl': {
          fontSize: 'var(--allec--ts--h2-fs)',
          lineHeight: 'var(--allec--ts--h2-lh)',
        },
        '3xl': {
          fontSize: 'var(--allec--ts--h3-fs)',
          lineHeight: 'var(--allec--ts--h3-lh)',
        },
        '2xl': {
          fontSize: 'var(--allec--ts--h4-fs)',
          lineHeight: 'var(--allec--ts--h4-lh)',
        },
        xl: {
          fontSize: 'var(--allec--ts--h5-fs)',
          lineHeight: 'var(--allec--ts--h5-lh)',
        },
        lg: {
          fontSize: 'var(--allec--ts--h6-fs)',
          lineHeight: 'var(--allec--ts--h6-lh)',
        },
        md: {
          fontSize: responsive('md'),
          lineHeight: responsive('md'),
        },
        sm: {
          fontSize: 'sm',
          lineHeight: 'sm',
        },
        xs: {
          fontSize: 'xs',
          lineHeight: 'xs',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'ink',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: 'md',
      },
      variants: {
        deco: {
          fontFamily: 'deco',
        },
      },
    },
  },
})

export default theme
