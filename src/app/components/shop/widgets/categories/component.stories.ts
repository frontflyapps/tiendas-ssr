import { type Meta, type StoryObj } from '@storybook/angular';
import { CategoriesComponent } from './categories.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<CategoriesComponent> = {
  title: 'Shop/Widgets/CategoriesComponent',
  component: CategoriesComponent,
  decorators: storiesDecorators,
  render: (args: CategoriesComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CategoriesComponent>;

export const Default: Story = {
  args: {},
};
