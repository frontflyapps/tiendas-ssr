import { type Meta, type StoryObj } from '@storybook/angular';
import { AboutUsComponent } from './about-us.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<AboutUsComponent> = {
  title: 'AboutUs/AboutUsComponent',
  component: AboutUsComponent,
  decorators: storiesDecorators,
  render: (args: AboutUsComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<AboutUsComponent>;

export const Default: Story = {
  args: {},
};
