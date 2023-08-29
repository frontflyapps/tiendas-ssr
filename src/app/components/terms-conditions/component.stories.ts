import { type Meta, type StoryObj } from '@storybook/angular';
import { TermsConditionsComponent } from './terms-conditions.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<TermsConditionsComponent> = {
  title: 'Shop/TermsConditionsComponent',
  component: TermsConditionsComponent,
  decorators: storiesDecorators,
  render: (args: TermsConditionsComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<TermsConditionsComponent>;

export const Default: Story = {
  args: {},
};
