import {Meta, StoryObj} from "@storybook/react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "./select";

const meta = {
    title: 'Components/Select',
    component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
        <>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

        </>,
    }
}