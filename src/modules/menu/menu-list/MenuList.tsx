import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import { Pizza } from "../types/pizza";
type MenuListProps = {
	items: Pizza[];
};

const MenuList: FC<MenuListProps> = ({ items }) => {
	return (
		<div className="flex flex-wrap gap-10 justify-center">
			{items.map(({ image, ...pizza }) => (
				<MenuItem
					key={pizza.id}
					{...pizza}
					imagePath={"assets/pizza/" + image}
				/>
			))}
		</div>
	);
};

export default MenuList;
