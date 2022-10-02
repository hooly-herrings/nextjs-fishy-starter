const { defineConfig } = require('pollen-css/utils')

module.exports = defineConfig((pollen) => ({
  modules: {
    font: {
      ...pollen.font,
      sans: "'Lato', helvetica, arial, sans-serif",
      serif: "'Lato', georgia, times, serif",
    },
    color: {
      ...pollen.color,
      primary: '#294190',
    },
  },
}))
