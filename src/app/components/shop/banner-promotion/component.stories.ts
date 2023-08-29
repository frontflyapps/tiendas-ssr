import { type Meta, type StoryObj } from '@storybook/angular';
import { BannerPromotionComponent } from './banner-promotion.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BannerPromotionComponent> = {
  title: 'Shop/BannerPromotionComponent',
  component: BannerPromotionComponent,
  decorators: storiesDecorators,
  render: (args: BannerPromotionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BannerPromotionComponent>;

export const Default: Story = {
  args: {},
};
