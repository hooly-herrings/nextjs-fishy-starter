import createShevy from 'shevyjs'

export default function injectTypeScaleVarsToCSS(): void {
  const ratios = {
    minorSecond: [1.383, 1.296, 1.215, 1.138, 1.067, 1],
    majorSecond: [1.802, 1.602, 1.424, 1.266, 1.125, 1],
    minorThird: [2.488, 2.074, 1.728, 1.44, 1.2, 1],
    majorThird: [3.052, 2.441, 1.953, 1.563, 1.25, 1],
    perfectFourth: [4.209, 3.157, 2.369, 1.777, 1.333, 1],
    augmentedFourth: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
  }

  const tsBase = {
    baseFontSize: '18px',
    baseLineHeight: 1.5,
    fontScale: ratios.majorSecond,
    includeMarginBottom: true,
    proximity: null,
    precision: 3,
  }

  const ts = {
    xs: createShevy({
      ...tsBase,
    }),
    sm: createShevy({
      ...tsBase,
      fontScale: ratios.majorSecond,
    }),
    md: createShevy({
      ...tsBase,
      fontScale: ratios.minorThird,
      baseFontSize: '16px',
    }),
    lg: createShevy({
      ...tsBase,
      fontScale: ratios.majorThird,
      baseFontSize: '18px',
    }),
    xl: createShevy({
      ...tsBase,
      fontScale: ratios.perfectFourth,
      baseFontSize: '20px',
    }),
  }

  if (typeof window !== 'undefined') {
    const root = document.documentElement
    const sizes: ['xl', 'lg', 'md', 'sm', 'xs'] = ['xl', 'lg', 'md', 'sm', 'xs']
    const tags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'content'] = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'content',
    ]

    sizes.forEach((size) => {
      root.style.setProperty(
        `--allec--ts-${size}--space`,
        ts[size].baseSpacing()
      )
      root.style.setProperty(
        `--allec--ts-${size}--lhs`,
        ts[size].lineHeightSpacing()
      )
      tags.map((tag) => {
        root.style.setProperty(
          `--allec--ts-${size}--${tag}-fs`,
          ts[size][tag].fontSize || null
        )
        root.style.setProperty(
          `--allec--ts-${size}--${tag}-lh`,
          `${ts[size][tag].lineHeight}` || null
        )
      })
    })
  }
}
