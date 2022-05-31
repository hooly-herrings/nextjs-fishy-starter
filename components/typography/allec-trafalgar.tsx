import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

type Props = {
  children: ReactNode
  as?: HeadingTagTypes
}

const AllecTrafalgar = ({ children, as = 'h2' }: Props) => {
  return (
    <Heading size="4xl" as={as}>
      {children}
    </Heading>
  )
}

export default AllecTrafalgar
