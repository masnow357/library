import BookCard from "./BookCard";

interface LayoutProps {
	books: Book[];
}

const Books = ({books}: LayoutProps) => {
  return (
    <div className="flex flex-wrap">
        {books.map((book) => (
            <BookCard book={book} />
        ))}
    </div>
  )
}

export default Books
