import {Button} from './button';
import {Meta, StoryObj} from '@storybook/react';
import {useState} from "react";

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
        children: 'Full Width',
    },
    render: (args) => {
        const [count, setCount] = useState(0);
        return <Button {...args} onClick={() => setCount(count + 1)}>{count}</Button>;
    }
};

export const Link: Story = {
    args: {
        fullWidth: true,
        children: 'Link',
    },
    render: (args) => {
        return (
            <Button
                {...args} asChild>
                <
                    a href="https://www.google.com" target="_blank" title={"google"}> Go to Google
                </a>
            </Button>);
    }
};

// export const Link: Story = {
//     args: {
//         fullWidth: true,
//         children: 'Link',
//     },
//     render: (args) => {
//         const buttonRef = useRef<HTMLButtonElement>(null)
//         const anchorRef = useRef<HTMLAnchorElement>(null)
//         return (
//             <div><Button
//                 {...args} asChild>
//                 <
//                     a href="https://www.google.com" target="_blank" title={"google"} ref={anchorRef}> Go to Google
//                 </a>
//             </Button>
//                 <Button
//                     {...args}
//                     ref={buttonRef}
//                     onClick={() => anchorRef.current?.click()}
//                 >
//                     Nice Button
//                 </Button>
//             </div>
//         );
//
//     }
// }; вариант с рефом