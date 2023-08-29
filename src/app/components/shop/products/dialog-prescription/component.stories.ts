import { type Meta, type StoryObj } from '@storybook/angular';
import { DialogPrescriptionComponent } from './dialog-prescription.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<DialogPrescriptionComponent> = {
  title: 'Shop/Products/DialogPrescriptionComponent',
  component: DialogPrescriptionComponent,
  decorators: storiesDecorators,
  render: (args: DialogPrescriptionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<DialogPrescriptionComponent>;

export const Default: Story = {
  args: {},
};
