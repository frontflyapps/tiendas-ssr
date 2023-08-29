import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductVerticalComponent } from './product-vertical.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductVerticalComponent> = {
  title: 'Shop/Products/ProductVerticalComponent',
  component: ProductVerticalComponent,
  decorators: storiesDecorators,
  render: (args: ProductVerticalComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductVerticalComponent>;

export const Default: Story = {
  args: {},
};
