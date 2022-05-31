import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

type Props = {
  children: ReactNode
  as?: HeadingTagTypes
}

const AllecDoublePica = ({ children, as = 'h4' }: Props) => {
  return (
    <Heading size="2xl" as={as}>
      {children}
    </Heading>
  )
}

export default AllecDoublePica
