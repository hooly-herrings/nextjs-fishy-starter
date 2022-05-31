const BASE = 'var(--allec--ts--space)'
const FRACTION = 'var(--allec--ts--space) * 0.25'

const spacing = {
  px: '1px',
  0.5: `calc(${FRACTION} * 0.5)`,
  1: `calc(${BASE} * 0.25)`,
  1.5: `calc(${FRACTION}) * 1.5`,
  2: `calc(${FRACTION} * 2)`,
  2.5: `calc(${FRACTION} * 2.5)`,
  3: `calc(${FRACTION} * 3)`,
  3.5: `calc(${FRACTION} * 3.5)`,
  4: BASE,
  5: `calc(${FRACTION} * 5)`,
  6: `calc(${FRACTION} * 6)`,
  7: `calc(${FRACTION} * 7)`,
  8: `calc(${BASE} * 2)`,
  9: `calc(${FRACTION} * 9)`,
  10: `calc(${FRACTION} * 10)`,
  12: `calc(${BASE} * 3)`,
  14: `calc(${FRACTION} * 14)`,
  16: `calc(${BASE} * 4)`,
  20: `calc(${BASE} * 5)`,
  24: `calc(${BASE} * 6)`,
  28: `calc(${BASE} * 7)`,
  32: `calc(${BASE} * 8)`,
  36: `calc(${BASE} * 9)`,
  40: `calc(${BASE} * 10)`,
  44: `calc(${BASE} * 11)`,
  48: `calc(${BASE} * 12)`,
  52: `calc(${BASE} * 13)`,
  56: `calc(${BASE} * 14)`,
  60: `calc(${BASE} * 15)`,
  64: `calc(${BASE} * 16)`,
  72: `calc(${BASE} * 18)`,
  80: `calc(${BASE} * 20)`,
  96: `calc(${BASE} * 24)`,
}

export default spacing
