import CodersButton from "../components/CodersButton";

export default {
    title: 'Components/CodersButton',
    component: CodersButton
}


const Template = (args) => <CodersButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: 'XPTO'
}

export const WithIcon = Template.bind({});