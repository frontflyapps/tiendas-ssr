import { type Meta, type StoryObj } from '@storybook/angular';
import { MainHomeComponent } from './main-home.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<MainHomeComponent> = {
  title: 'Shop/MainHomeComponent',
  component: MainHomeComponent,
  decorators: storiesDecorators,
  render: (args: MainHomeComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MainHomeComponent>;

export const Default: Story = {
  args: {},
};
