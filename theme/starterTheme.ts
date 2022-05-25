import { extendTheme, theme } from '@chakra-ui/react'

const starterTheme = extendTheme({
  // Typography
  fonts: {
    heading: `${theme.fonts?.heading}`,
    body: `${theme.fonts?.heading}`,
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
    Text: {
      baseStyle: {
        color: 'red',
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'gray.400',
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'gray.400',
            borderColor: 'gray.400',
          },
        },
      },
    },
    Slider: {
      baseStyle: {
        filledTrack: {
          bg: 'gray.500',
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: 'gray.500',
          },
        },
      },
    },
    Tabs: {
      defaultProps: {
        colorScheme: 'grey',
      },
    },
  },
})

export default starterTheme
