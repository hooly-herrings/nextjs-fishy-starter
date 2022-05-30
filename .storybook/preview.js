import theme from '../theme'
import '../styles/global.css'
import injectTypeScaleVarsToCSS from '../utils/injectTypeScaleVarsToCSS'

injectTypeScaleVarsToCSS()

export const parameters = {
  chakra: {
    theme: theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
