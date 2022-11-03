const { defineConfig } = require('pollen-css/utils')

const RATIO = Object.freeze({
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
})

function calculateTypoScale(
  base = 1,
  ratio = 1.3,
  lineHeight = 1.33,
  unit = 'rem',
  stepsUp = 11,
  stepsDown = 4
) {
  const baseLine = (lineHeight * base).toFixed(4)
  const scaleUp = Array.from({ length: stepsUp }, (_, i) => {
    const fs = (base * Math.pow(ratio, i)).toFixed(4)
    const lh = (lineHeight * fs).toFixed(4)
    const tslh =
      lh % baseLine === 0
        ? lh
        : (Math.ceil(lh / baseLine) * baseLine).toFixed(4)
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    }
  })
  const scaleDown = Array.from({ length: stepsDown }, (_, i) => {
    const fs = (base / Math.pow(ratio, i)).toFixed(4)
    const lh = (lineHeight * fs).toFixed(4)
    const tslh =
      lh % baseLine === 0
        ? lh
        : (Math.ceil(lh / baseLine) * baseLine).toFixed(4)
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    }
  })
  return {
    up: scaleUp,
    base: {
      fs: `${base}${unit}`,
      lh: `${baseLine}${unit}`,
    },
    down: scaleDown,
  }
}

const ts = {
  sm: calculateTypoScale(1, RATIO.majorSecond, 1.3, 'rem'),
  md: calculateTypoScale(1.2, RATIO.majorThird, 1.4, 'rem'),
  lg: calculateTypoScale(1.4, RATIO.perfectFourth, 1.4, 'rem'),
  xl: calculateTypoScale(1.6, RATIO.augmentedFourth, 1.4, 'rem'),
}

module.exports = defineConfig((pollen) => ({
  modules: {
    baseline: {
      height: ts.sm.base.lh,
    },
    font: {
      ...pollen.font,
      sans: "'Lato', helvetica, arial, sans-serif",
      serif: 'georgia, times, serif',
      handwritten: "'Caveat', helvetica, arial, sans-serif",
      mono: "'Fira Code', monospace",
    },
    scale: {
      0: ts.sm.base.fs,
      1: ts.sm.up[1].fs,
      2: ts.sm.up[2].fs,
      3: ts.sm.up[3].fs,
      4: ts.sm.up[4].fs,
      5: ts.sm.up[5].fs,
      6: ts.sm.up[6].fs,
      7: ts.sm.up[7].fs,
      8: ts.sm.up[8].fs,
      9: ts.sm.up[9].fs,
      10: ts.sm.up[10].fs,
      '00': ts.sm.down[1].fs,
      '000': ts.sm.down[2].fs,
      '0000': ts.sm.down[3].fs,
    },
    color: {
      'primary-50': 'hsl(222,100%,81%)',
      'primary-100': 'hsl(224,86%,77%)',
      'primary-200': 'hsl(222,56%,64%)',
      'primary-300': 'hsl(221,42%,52%)',
      'primary-400': 'hsl(218,51%,40%)',
      'primary-500': 'hsl(210,100%,24%)',
      'primary-600': 'hsl(217,100%,18%)',
      'primary-700': 'hsl(236,100%,12%)',
      'primary-800': 'hsl(240,100%,7%)',
      'primary-900': 'hsl(240,100%,2%)',
      primary: 'var(--color-primary-500)',
      'subtle-50': 'hsl(180,100%,97%)',
      'subtle-100': 'hsl(199,100%,94%)',
      'subtle-200': 'hsl(220,100%,88%)',
      'subltle-300': 'hsl(224,66%,78%)',
      'subtle-400': 'hsl(223,41%,66%)',
      'subtle-500': 'hsl(222,30%,54%)',
      'subtle-600': 'hsl(220,33%,41%)',
      'subtle-700': 'hsl(217,49%,28%)',
      'subtle-800': 'hsl(211,100%,15%)',
      'subtle-900': 'hsl(233,100%,9%)',
      subtle: 'var(--color-subtle-500)',

      'supplenentary-50': `hsl(60, 100%, 84%)`,
      'supplementary-100': `hsl(60, 100%, 80%)`,
      'supplementary-200': `hsl(60, 100%, 74%)`,
      'supplementary-300': `hsl(58, 100%, 68%)`,
      'supplementary-400': `hsl(49, 100%, 61%)`,
      'supplementary-500': `hsl(44, 99%, 49%)`,
      'supplementary-600': `hsl(43, 100%, 42%)`,
      'supplementary-700': `hsl(42, 100%, 34%)`,
      'supplementary-800': `hsl(39, 100%, 27%)`,
      'supplementary-900': `hsl(35, 100%, 20%)`,
      supplementary: 'var(--color-supplementary-500)',

      white: 'hsl(0,0%,100%)',
      black: 'hsl(0,0%,0%)',
      grey: 'hsl(0,0%,50%)',
      'grey-dark': 'hsl(0,0%,25%)',
      'grey-light': 'hsl(0,0%,75%)',
      'grey-lighter': 'hsl(0,0%,90%)',
      'grey-lightest': 'hsl(0,0%,95%)',

      'ink-lighter': 'hsl(0,0%,30%)',
      'ink-light': 'hsl(0,0%,40%)',
      ink: 'hsl(0,0%,24%)',
      'ink-dark': 'hsl(0,0%,16%)',
      'ink-darker': 'hsl(0,0%,8%)',
      'ink-darkest': 'hsl(0,0%,4%)',

      'paper-light': 'hsl(33,38%,97%)',
      paper: 'hsl(33,38%,94%)',
      'paper-dark': 'hsl(33,38%,81%)',

      headings: 'var(--color-ink-dark)',
      paragraphs: 'var(--color-ink)',
      background: 'var(--color-paper)',
    },
    size: {
      ...pollen.size,
      1: 'calc(var(--baseline-height) * 0.25)',
      2: 'calc(var(--baseline-height) * 0.5)',
      3: 'calc(var(--baseline-height) * 0.75)',
      4: 'var(--baseline-height)',
      5: 'calc(var(--baseline-height) * 1.25)',
      6: 'calc(var(--baseline-height) * 1.5)',
      7: 'calc(var(--baseline-height) * 1.75)',
      8: 'calc(var(--baseline-height) * 2)',
      9: 'calc(var(--baseline-height) * 2.25)',
      10: 'calc(var(--baseline-height) * 2.5)',
      11: 'calc(var(--baseline-height) * 2.75)',
      12: 'calc(var(--baseline-height) * 3)',
      14: 'calc(var(--baseline-height) * 3.5)',
      16: 'calc(var(--baseline-height) * 4)',
      20: 'calc(var(--baseline-height) * 5)',
      24: 'calc(var(--baseline-height) * 6)',
      28: 'calc(var(--baseline-height) * 7)',
      32: 'calc(var(--baseline-height) * 8)',
      36: 'calc(var(--baseline-height) * 9)',
      40: 'calc(var(--baseline-height) * 10)',
      44: 'calc(var(--baseline-height) * 11)',
      48: 'calc(var(--baseline-height) * 12)',
      52: 'calc(var(--baseline-height) * 13)',
      56: 'calc(var(--baseline-height) * 14)',
      60: 'calc(var(--baseline-height) * 15)',
      64: 'calc(var(--baseline-height) * 16)',
      72: 'calc(var(--baseline-height) * 18)',
      80: 'calc(var(--baseline-height) * 20)',
      96: 'calc(var(--baseline-height) * 24)',
      base: 'var(--baseline-height)',
      'base-2': 'calc(var(--baseline-height) * 2)',
      'base-3': 'calc(var(--baseline-height) * 3)',
      'base-4': 'calc(var(--baseline-height) * 4)',
      'base-5': 'calc(var(--baseline-height) * 5)',
      'base-6': 'calc(var(--baseline-height) * 6)',
      'base-7': 'calc(var(--baseline-height) * 7)',
      'base-8': 'calc(var(--baseline-height) * 8)',
      'base-9': 'calc(var(--baseline-height) * 9)',
      'base-10': 'calc(var(--baseline-height) * 10)',
      'base-15': 'calc(var(--baseline-height) * 15)',
      'base-20': 'calc(var(--baseline-height) * 20)',
      'base-25': 'calc(var(--baseline-height) * 25)',
      'base-30': 'calc(var(--baseline-height) * 30)',
      'base-40': 'calc(var(--baseline-height) * 40)',
      'base-50': 'calc(var(--baseline-height) * 50)',
      'base-60': 'calc(var(--baseline-height) * 60)',
      'base-70': 'calc(var(--baseline-height) * 70)',
      'base-80': 'calc(var(--baseline-height) * 80)',
      'base-90': 'calc(var(--baseline-height) * 90)',
      'base-100': 'calc(var(--baseline-height) * 100)',
      'base-150': 'calc(var(--baseline-height) * 150)',
      'base-200': 'calc(var(--baseline-height) * 200)',
    },
  },
  media: {
    '(min-width: 640px)': {
      baseline: {
        height: ts.md.base.lh,
      },
      scale: {
        0: ts.md.base.fs,
        1: ts.md.up[1].fs,
        2: ts.md.up[2].fs,
        3: ts.md.up[3].fs,
        4: ts.md.up[4].fs,
        5: ts.md.up[5].fs,
        6: ts.md.up[6].fs,
        7: ts.md.up[7].fs,
        8: ts.md.up[8].fs,
        9: ts.md.up[9].fs,
        10: ts.md.up[10].fs,
        '00': ts.md.down[1].fs,
        '000': ts.md.down[2].fs,
        '0000': ts.md.down[3].fs,
      },
    },
    '(min-width: 1280px)': {
      baseline: {
        height: ts.lg.base.lh,
      },
      scale: {
        0: ts.lg.base.fs,
        1: ts.lg.up[1].fs,
        2: ts.lg.up[2].fs,
        3: ts.lg.up[3].fs,
        4: ts.lg.up[4].fs,
        5: ts.lg.up[5].fs,
        6: ts.lg.up[6].fs,
        7: ts.lg.up[7].fs,
        8: ts.lg.up[8].fs,
        9: ts.lg.up[9].fs,
        10: ts.lg.up[10].fs,
        '00': ts.lg.down[1].fs,
        '000': ts.lg.down[2].fs,
        '0000': ts.lg.down[3].fs,
      },
    },
    '(min-width: 1920px)': {
      baseline: {
        height: ts.xl.base.lh,
      },
      scale: {
        0: ts.xl.base.fs,
        1: ts.xl.up[1].fs,
        2: ts.xl.up[2].fs,
        3: ts.xl.up[3].fs,
        4: ts.xl.up[4].fs,
        5: ts.xl.up[5].fs,
        6: ts.xl.up[6].fs,
        7: ts.xl.up[7].fs,
        8: ts.xl.up[8].fs,
        9: ts.xl.up[9].fs,
        10: ts.xl.up[10].fs,
        '00': ts.xl.down[1].fs,
        '000': ts.xl.down[2].fs,
        '0000': ts.xl.down[3].fs,
      },
    },
  },
}))
