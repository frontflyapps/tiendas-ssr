import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductLeftSidebarComponent } from './product-left-sidebar.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ProductLeftSidebarComponent> = {
  title: 'Shop/Products/ProductLeftSidebarComponent',
  component: ProductLeftSidebarComponent,
  decorators: storiesDecorators,
  render: (args: ProductLeftSidebarComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProductLeftSidebarComponent>;

export const Default: Story = {
  args: {},
};
