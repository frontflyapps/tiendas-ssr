import { type Meta, type StoryObj } from '@storybook/angular';
import { NotFoundComponent } from './not-found.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<NotFoundComponent> = {
  title: 'Error/NotFoundComponent',
  component: NotFoundComponent,
  decorators: storiesDecorators,
  render: (args: NotFoundComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<NotFoundComponent>;

export const Default: Story = {
  args: {},
};
