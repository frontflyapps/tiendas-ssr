import { type Meta, type StoryObj } from '@storybook/angular';
import { ForbiddenAccessComponent } from './forbidden-access.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<ForbiddenAccessComponent> = {
  title: 'Error/ForbiddenAccessComponent',
  component: ForbiddenAccessComponent,
  decorators: storiesDecorators,
  render: (args: ForbiddenAccessComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ForbiddenAccessComponent>;

export const Default: Story = {
  args: {},
};
