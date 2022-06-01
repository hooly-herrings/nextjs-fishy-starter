import { extendTheme } from '@chakra-ui/react'
import spacing from './partials/spacing'
import colors from './partials/colors'
import typography from './partials/typography'

const starterTheme = extendTheme({
  space: spacing,
  ...typography,
  colors,
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
          fontSize: 'var(--allec--ts--content-fs)',
          lineHeight: 'var(--allec--ts--content-lh)',
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
  config: {
    cssVarPrefix: 'allec',
  },
})

export default starterTheme
