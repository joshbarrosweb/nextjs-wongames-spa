import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy Death 1',
    subtitle: 'Description...',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best-selling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy Death 2',
    subtitle: 'Description...',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best-selling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy Death 3',
    subtitle: 'Description...',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best-selling'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
