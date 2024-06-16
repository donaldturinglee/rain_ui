import { StoryFn, Meta } from "@storybook/react";
import Typography from "./Typography";


export default {
    title: "Rain UI/Typography",
    component: Typography,
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const TypographyTest = Template.bind({});
