import { useEffect, useState } from "react"

const useSearchBooks = () => {

  const [books, setBooks] = useState<Book[]>([])
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [genres, setGenres] = useState<string[]>([])

  useEffect(() => {
    fetch("src/assets/books.json")
    .then((data => data.json()))
    .then(result => {
      console.log(result)
      setBooks(result.books)
      setAllBooks(result.books)
      extractGenres(result.books)
    })
  }, [])

  const extractGenres = (books: Book[]):void => {
    const genresSet = new Set<string>();
  
    books.forEach(book => {
      console.log(book)
      if (book.genre) {
        genresSet.add(book.genre);
      }
    });
    console.log(genresSet)
  
    setGenres(Array.from(genresSet))
  }

  const filter = (searchTerm: string):void  => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredBooks = allBooks.filter(book =>
      book.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      book.author.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setBooks(filteredBooks)
    extractGenres(books)
  }

  const reset = ():void => {
    setBooks(allBooks)
  }

  return {books, filter, reset, genres}
}

export default useSearchBooks