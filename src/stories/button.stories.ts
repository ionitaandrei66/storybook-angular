import { Meta } from '@storybook/angular';
import {ButtonComponent} from '../app/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
} as Meta<ButtonComponent>;

export const Primary = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  },
};
