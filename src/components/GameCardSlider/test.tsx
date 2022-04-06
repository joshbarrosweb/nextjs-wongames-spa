import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import GameCardSlider from '.'

const items = [
  {
    id: '1',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  },
  {
    id: '2',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  },
  {
    id: '3',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  },
  {
    id: '4',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  },
  {
    id: '5',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  },
  {
    id: '6',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$: 350,00',
    promotionalPrice: 'R$: 133,33'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
