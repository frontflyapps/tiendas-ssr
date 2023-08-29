import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductCarouselTwoComponent } from './product-carousel-two.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductCarouselTwoComponent> = {
  title: 'Shop/ProductCarouselTwoComponent',
  component: ProductCarouselTwoComponent,
  decorators: storiesDecorators,
  render: (args: ProductCarouselTwoComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductCarouselTwoComponent>;

export const Default: Story = {
  args: {},
};
