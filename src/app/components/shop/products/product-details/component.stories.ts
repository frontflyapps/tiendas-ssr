import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductDetailsComponent } from './product-details.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductDetailsComponent> = {
  title: 'Shop/Products/ProductDetailsComponent',
  component: ProductDetailsComponent,
  decorators: storiesDecorators,
  render: (args: ProductDetailsComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductDetailsComponent>;

export const Default: Story = {
  args: {},
};
