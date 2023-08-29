import { type Meta, type StoryObj } from '@storybook/angular';
import { DialogFiltersMComponent } from './dialog-filters-m.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<DialogFiltersMComponent> = {
  title: 'Shop/Products/DialogFiltersMComponent',
  component: DialogFiltersMComponent,
  decorators: storiesDecorators,
  render: (args: DialogFiltersMComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<DialogFiltersMComponent>;

export const Default: Story = {
  args: {},
};
