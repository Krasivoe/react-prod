import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'export default {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    argTypes: {\n'
            + '        backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '} as ComponentMeta<typeof Code>;\n'
            + '\n'
            + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
            + '\n'
            + 'export const Normal = Template.bind({});',
    },
};
