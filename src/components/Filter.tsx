interface LayoutProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ handleChange }: LayoutProps) => {
	return (
		<input
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="text"
			onChange={handleChange}
			placeholder="Search by name or author"
		/>
	);
};

export default Filter;
