import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductGridComponent } from './product-grid.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductGridComponent> = {
  title: 'Shop/ProductGridComponent',
  component: ProductGridComponent,
  decorators: storiesDecorators,
  render: (args: ProductGridComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductGridComponent>;

export const Default: Story = {
  args: {},
};
