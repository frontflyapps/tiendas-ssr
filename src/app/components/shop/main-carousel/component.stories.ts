import { type Meta, type StoryObj } from '@storybook/angular';
import { MainCarouselComponent } from './main-carousel.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<MainCarouselComponent> = {
  title: 'Shop/MainCarouselComponent',
  component: MainCarouselComponent,
  decorators: storiesDecorators,
  render: (args: MainCarouselComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MainCarouselComponent>;

export const Default: Story = {
  args: {},
};
