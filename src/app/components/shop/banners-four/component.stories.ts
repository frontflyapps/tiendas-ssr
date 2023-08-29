import { type Meta, type StoryObj } from '@storybook/angular';
import { BannersFourComponent } from './banners-four.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BannersFourComponent> = {
  title: 'Shop/BannersFourComponent',
  component: BannersFourComponent,
  decorators: storiesDecorators,
  render: (args: BannersFourComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BannersFourComponent>;

export const Default: Story = {
  args: {},
};
