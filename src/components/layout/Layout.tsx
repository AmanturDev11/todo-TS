import Header from "./Header";
import Footer from "./Footer";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const Layout = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<TodoForm />
				<TodoList />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
