import { type Meta, type StoryObj } from '@storybook/angular';
import { BrandsMComponent } from './brands-m.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BrandsMComponent> = {
  title: 'Shop/Widgets/BrandsMComponent',
  component: BrandsMComponent,
  decorators: storiesDecorators,
  render: (args: BrandsMComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BrandsMComponent>;

export const Default: Story = {
  args: {},
};
