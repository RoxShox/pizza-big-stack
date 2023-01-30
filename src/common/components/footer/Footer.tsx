import React from "react";
import FooterLink from "../FooterLink/FooterLink";

const Footer = () => {
	return (
		<div className="bg-gray-900 pt-12 px-12 pb-8">
			<div>
				<div>
					<span className="uppercase mb-4 font-bold text-sm text-zinc-500">
						Контакты
					</span>
				</div>
				<div className="mb-8">
					<ul>
						<FooterLink href={"tel:+3804412344567"}>044 123 45 67</FooterLink>

						<FooterLink href={"mailto:Info@pizzastack.app"}>
							Info@pizzastack.app
						</FooterLink>
					</ul>
				</div>
				<hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
				<div>
					<span className="text-xl font-bold text-white">PizzaStack</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
