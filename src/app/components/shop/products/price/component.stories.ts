import { type Meta, type StoryObj } from '@storybook/angular';
import { PriceComponent } from './price.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<PriceComponent> = {
  title: 'Shop/Products/PriceComponent',
  component: PriceComponent,
  decorators: storiesDecorators,
  render: (args: PriceComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<PriceComponent>;

export const Default: Story = {
  args: {},
};
