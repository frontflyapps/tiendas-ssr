import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductCarouselComponent } from './product-carousel.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductCarouselComponent> = {
  title: 'Shop/ProductCarouselComponent',
  component: ProductCarouselComponent,
  decorators: storiesDecorators,
  render: (args: ProductCarouselComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductCarouselComponent>;

export const Default: Story = {
  args: {},
};
