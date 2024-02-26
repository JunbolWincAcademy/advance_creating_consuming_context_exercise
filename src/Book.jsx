import { useContext } from 'react'; // ✚ forgot to import useContext so could use it down below
import { LibraryContext } from './libraryContext'; // ✚ Forgot to import LibraryContext so I could use it down below
export const Book = ({ book }) => {
  const { borrowBook, returnBook } = useContext(LibraryContext); // ✚ Access books from libraryContext. Remember that was provided in Library.jsx
  return (
    <>
      <h4>📖 {book.title}</h4>
      <p>✍ {book.author}</p>
      {book.available ? (
        <button type="button" onClick={() => borrowBook(book.id)}>
          ⇩ Borrow
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.id)}>
          ⏎ Return
        </button>
      )}
    </>
  );
};
