import { Button, VARIANTS } from './Button';

export default {
    title: 'Button',
    component: Button,
    // argTypes: {
    //     variant: {
    //         options: Object.values(VARIANTS),
    //         control: { type: 'radio' }
    //     }
    // }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    disabled: false,
    variant: VARIANTS.PRIMARY
}

export const Seconadry = Template.bind({});
Seconadry.args = {
    children: 'Seconadry',
    disabled: true,
    variant: VARIANTS.SECONADRY
}

// export const Primary = () => <Button variant={VARIANTS.PRIMARY}>First</Button>;

// export const Secondary = () => <Button variant={VARIANTS.SECONDARY}>Second</Button>