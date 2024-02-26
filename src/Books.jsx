import { Category } from './category';
import { useContext } from 'react';
import { LibraryContext } from './libraryContext';

export const Books = () => {
  const { books } = useContext(LibraryContext);
  return (
    <>
      <h2>Books ({books.length}):</h2>
      <Category title="Programming" book=" Programming" />
    </>
  );
};

//-------COPY OF THE OLD CODE:
/* export const Books = ({ books, borrowBook, returnBook }) => {
  return (
    <>
      <h2>Books ({books.length}):</h2>
      <Category
        title="Programming"
        books={books.filter((book) => book.category === "programming")}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};
 */
