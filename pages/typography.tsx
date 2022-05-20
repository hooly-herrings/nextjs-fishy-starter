import { Box, Container, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import createShevy from 'shevyjs'

const ratios = {
  majorSecond: [1.802, 1.602, 1.424, 1.266, 1.125, 1],
  minorThird: [2.488, 2.074, 1.728, 1.44, 1.2, 1],
  majorThird: [3.052, 2.441, 1.953, 1.563, 1.25, 1],
  perfectFourth: [4.209, 3.157, 2.369, 1.777, 1.333, 1],
  augmentedFourth: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
}

const ts = {
  sm: createShevy({
    baseFontSize: '14px',
    baseLineHeight: 1.5,
    fontScale: ratios.majorSecond,
    includeMarginBottom: true,
    proximity: null,
    precision: null,
  }),
  md: createShevy({
    baseFontSize: '16px',
    baseLineHeight: 1.5,
    fontScale: ratios.majorThird,
    includeMarginBottom: true,
    proximity: null,
    precision: null,
  }),
  lg: createShevy({
    baseFontSize: '20px',
    baseLineHeight: 1.5,
    fontScale: ratios.perfectFourth,
    includeMarginBottom: true,
    proximity: null,
    precision: null,
  }),
  xl: createShevy({
    baseFontSize: '24px',
    baseLineHeight: 1.5,
    fontScale: ratios.augmentedFourth,
    includeMarginBottom: true,
    proximity: null,
    precision: null,
  }),
}

const Typography: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Box>
        <Heading size="2xl" color={['red', null, 'green', 'blue', 'violet']}>
          Typography
        </Heading>
        <Text>{ts.sm.h1.fontSize}</Text>
        <Text>{ts.md.h1.fontSize}</Text>
        <Text>{ts.lg.h1.fontSize}</Text>
        <Text>{ts.xl.h1.fontSize}</Text>
      </Box>
    </Container>
  )
}

export default Typography
