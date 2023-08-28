import { type Meta, type StoryObj } from '@storybook/angular';
import { OutdatedVersionComponent } from './outdated-version.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<OutdatedVersionComponent> = {
  title: 'Error/OutdatedVersionComponent',
  component: OutdatedVersionComponent,
  decorators: storiesDecorators,
  render: (args: OutdatedVersionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<OutdatedVersionComponent>;

export const Default: Story = {
  args: {},
};
