import { type Meta, type StoryObj } from '@storybook/angular';
import { BrandsComponent } from './brands.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BrandsComponent> = {
  title: 'Shop/Widgets/BrandsComponent',
  component: BrandsComponent,
  decorators: storiesDecorators,
  render: (args: BrandsComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BrandsComponent>;

export const Default: Story = {
  args: {},
};
