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

    expect(screen.getByRole('img', { name: /Defy Death/i })).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
