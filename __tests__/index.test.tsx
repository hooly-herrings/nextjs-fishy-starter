import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Home Page/i,
    })

    expect(heading).toBeInstanceOf(HTMLHeadingElement)
  })
})
