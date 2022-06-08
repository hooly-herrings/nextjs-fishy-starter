import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

type Props = {
  children: ReactNode
  as?: HeadingTagTypes
}

const AllecBodyCopy = ({ children, as = 'h6' }: Props) => {
  return (
    <Heading size="md" as={as}>
      {children}
    </Heading>
  )
}

export default AllecBodyCopy
