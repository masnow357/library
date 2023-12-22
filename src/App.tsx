import "./App.css";
import Books from "./components/Books";
import Filter from "./components/Filter";
import useSearchBooks from "./hooks/useSearchBooks";

function App() {
	const { books, filter } = useSearchBooks();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		event.preventDefault();
		filter(event.target.value);
	};

	return (
		<>
			<Filter handleChange={handleChange} />
      <Books books={books} />
			
		</>
	);
}

export default App;
