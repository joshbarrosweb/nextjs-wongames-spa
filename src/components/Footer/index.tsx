import Heading from '../Heading'
import Logo from '../Logo'
import Link from 'next/link'
import * as S from './styles'

export const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom>
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <nav aria-labelledby="social media">
          <a>
            Instagram
          </a>
          <a>
            Twitter
          </a>
          <a>
            YouTube
          </a>
          <a>
            LinkedIn
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
          <Heading color="black" lineBottom size="small">
            Links
          </Heading>

          <nav id="resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-label="contact">
          <Heading color="black" lineBottom size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>
        Won Games 2022 © All Rights Reserved.
      </S.Copyright>
  </S.Wrapper>
)

export default Footer
