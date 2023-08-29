import { type Meta, type StoryObj } from '@storybook/angular';
import { BlogSectionComponent } from './blog-section.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<BlogSectionComponent> = {
  title: 'Shop/BlogSectionComponent',
  component: BlogSectionComponent,
  decorators: storiesDecorators,
  render: (args: BlogSectionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BlogSectionComponent>;

export const Default: Story = {
  args: {},
};
