import { useContext } from 'react'; // ✚ forgot to import useContext so could use it down below
import { LibraryContext } from './libraryContext'; // ✚ Forgot to import LibraryContext so I could use it down below
import { Book } from './book';

export const Category = ({ title }) => {
  //❌ I didn't need the 'book' prop here, Context will take care of that
  const { books } = useContext(LibraryContext); // ✚ Access books from libraryContext. Remember that was provided in Library.jsx
  const filteredBooks = books.filter((book) => book.category === 'programming'); // ✚ Correctly filter books for
  // the "programming" category. Adjust this as needed for dynamic categories.
  return (
    <>
      <h3>
        {title} ({filteredBooks.length}):
      </h3>
      {filteredBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
