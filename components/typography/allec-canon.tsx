import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

interface Props {
  children: ReactNode
  as?: HeadingTagTypes
}
const AllecCanon = ({ children, as = 'h1' }: Props) => {
  return (
    <Heading size="5xl" as={as}>
      {children}
    </Heading>
  )
}

export default AllecCanon
