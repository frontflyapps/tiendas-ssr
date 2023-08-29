import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductListComponent } from './product-list.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductListComponent> = {
  title: 'Shop/ProductListComponent',
  component: ProductListComponent,
  decorators: storiesDecorators,
  render: (args: ProductListComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductListComponent>;

export const Default: Story = {
  args: {},
};
