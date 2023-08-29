import { type Meta, type StoryObj } from '@storybook/angular';
import { ShopsListComponent } from './shops-list.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ShopsListComponent> = {
  title: 'Shop/ShopsListComponent',
  component: ShopsListComponent,
  decorators: storiesDecorators,
  render: (args: ShopsListComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ShopsListComponent>;

export const Default: Story = {
  args: {},
};
