import { type Meta, type StoryObj } from '@storybook/angular';
import { LostConexionComponent } from './lost-conexion.component';
import { storiesDecorators } from 'src/app/app.stories.modules';

const meta: Meta<LostConexionComponent> = {
  title: 'Error/LostConexionComponent',
  component: LostConexionComponent,
  decorators: storiesDecorators,
  render: (args: LostConexionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<LostConexionComponent>;

export const Default: Story = {
  args: {},
};
