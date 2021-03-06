import React from 'react'
import { Button } from '@chakra-ui/react'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const CustomButton = ({
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button size={size} type="button" {...props}>
      {label}
    </Button>
  )
}
