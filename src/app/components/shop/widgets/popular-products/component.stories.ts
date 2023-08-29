import { type Meta, type StoryObj } from '@storybook/angular';
import { PopularProductsComponent } from './popular-products.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<PopularProductsComponent> = {
  title: 'Shop/Widgets/PopularProductsComponent',
  component: PopularProductsComponent,
  decorators: storiesDecorators,
  render: (args: PopularProductsComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<PopularProductsComponent>;

export const Default: Story = {
  args: {},
};
