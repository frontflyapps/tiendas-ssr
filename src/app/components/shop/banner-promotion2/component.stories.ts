import { type Meta, type StoryObj } from '@storybook/angular';
import { BannerPromotion2Component } from './banner-promotion2.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BannerPromotion2Component> = {
  title: 'Shop/BannerPromotion2Component',
  component: BannerPromotion2Component,
  decorators: storiesDecorators,
  render: (args: BannerPromotion2Component) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BannerPromotion2Component>;

export const Default: Story = {
  args: {},
};
