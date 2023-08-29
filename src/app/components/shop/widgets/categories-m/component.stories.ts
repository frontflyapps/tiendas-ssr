import { type Meta, type StoryObj } from '@storybook/angular';
import { CategoriesMComponent } from './categories-m.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<CategoriesMComponent> = {
  title: 'Shop/Widgets/CategoriesMComponent',
  component: CategoriesMComponent,
  decorators: storiesDecorators,
  render: (args: CategoriesMComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CategoriesMComponent>;

export const Default: Story = {
  args: {},
};
