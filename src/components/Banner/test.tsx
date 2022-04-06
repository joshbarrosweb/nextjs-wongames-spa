import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/users/willianjusten/1042x580',
  title: 'Defy Death',
  subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel: 'Buy Now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the title, subtitle and image', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy Death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new Crashlands season/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Defy Death/i })
    ).toBeInTheDocument()
  })
})
