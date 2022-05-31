import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

type Props = {
  children: ReactNode
  as?: HeadingTagTypes
}

const AllecParagon = ({ children, as = 'h3' }: Props) => {
  return (
    <Heading size="3xl" as={as}>
      {children}
    </Heading>
  )
}

export default AllecParagon
