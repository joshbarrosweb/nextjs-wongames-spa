import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import bannersMock from '../../components/BannerSlider/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render elements correctly', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    // logos

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // home sections

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // banners

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)

    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3)
  })
})
