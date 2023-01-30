import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuList from "./MenuList";
import pizzaMenu from "@app/mocks/pizza.json";
export default {
	title: "Menu/MenuList",
	component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
	<MenuList {...args} />
);

export const View = Template.bind({});

View.args = {
	items: pizzaMenu,
};
