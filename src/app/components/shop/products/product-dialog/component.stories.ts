import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductDialogComponent } from './product-dialog.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductDialogComponent> = {
  title: 'Shop/Products/ProductDialogComponent',
  component: ProductDialogComponent,
  decorators: storiesDecorators,
  render: (args: ProductDialogComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductDialogComponent>;

export const Default: Story = {
  args: {},
};
