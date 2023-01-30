import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuItem from "./MenuItem";

export default {
	title: "Menu/MenuItem",
	component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
	<MenuItem {...args} />
);

export const View = Template.bind({});

View.args = {
	imagePath: "/assets/pizza/barbecue.jpeg",
	weight: 555,
	title: "Pizza Чикаго",
	ingredients: "(двойная порция чикаго)",
	price: 215,
};
