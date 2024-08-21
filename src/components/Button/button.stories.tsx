import { Button } from './button';
import {Meta, StoryObj} from '@storybook/react';
import {useState} from "react";
import {render} from "react-dom";

const meta = {
    title: 'Components/Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    }
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    }
};
export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'FullWidth',
    },
    render: (args) => {
      const [count, setCount] = useState(0);
      return <Button {...args} onClick={() => setCount(count + 1)}>{count}</Button>;
    }
};