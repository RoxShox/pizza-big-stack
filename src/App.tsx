import Header from "./common/components/header/Header";
import MenuList from "./modules/menu/menu-list/MenuList";
import pizzaMenu from "./mocks/pizza.json";
import Footer from "./common/components/footer/Footer";
function App() {
	return (
		<div>
			<Header />
			<div className="mx-12 mb-24">
				<MenuList items={pizzaMenu} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
