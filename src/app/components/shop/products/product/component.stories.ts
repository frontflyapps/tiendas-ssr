import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductComponent } from './product.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductComponent> = {
  title: 'Shop/Products/ProductComponent',
  component: ProductComponent,
  decorators: storiesDecorators,
  render: (args: ProductComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductComponent>;

export const Default: Story = {
  args: {},
};
