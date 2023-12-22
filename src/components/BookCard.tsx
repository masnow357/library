interface LayoutProps {
	book: Book;
}
function BookCard({ book }: LayoutProps) {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3">
			<img className="w-full" src={book.image} alt="Book image" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{book.name}</div>
				<i className="font-bold text-xl mb-2">{book.author}</i>
				<p className="text-gray-700 text-base">{book.description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{book.genre}
				</span>
			</div>
		</div>
	);
}

export default BookCard;
