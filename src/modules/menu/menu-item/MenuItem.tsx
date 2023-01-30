import React, { FC } from "react";

interface MenuItemProps {
	imagePath: string;
	weight: number;
	title: string;
	ingredients: string;
	price: number;
}

const MenuItem: FC<MenuItemProps> = ({
	imagePath,
	weight,
	title,
	ingredients,
	price,
}) => {
	return (
		<div className="w-96 shadow-xl rounded-2xl">
			<div className="w-full relative ">
				<img
					className="w-full h-[15rem] object-cover object-center rounded-t-2xl"
					src={imagePath}
					alt=""
				/>
				<span className="absolute bottom-2 right-3 bg-gray-900/50 rounded-full text-white text-sm px-2 ">
					{weight} г
				</span>
			</div>
			<div className="p-8">
				<h2 className="text-xl font-semibold mb-2">{title}</h2>
				<p className="mb-8">{ingredients}</p>
				<span className="text-xl font-semibold">{price}$</span>
			</div>
		</div>
	);
};

export default MenuItem;
