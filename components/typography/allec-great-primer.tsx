import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HeadingTagTypes } from '../../types/textTypes'

type Props = {
  children: ReactNode
  as?: HeadingTagTypes
}

const AllecGreatPrimer = ({ children, as = 'h5' }: Props) => {
  return (
    <Heading size="xl" as={as}>
      {children}
    </Heading>
  )
}

export default AllecGreatPrimer
