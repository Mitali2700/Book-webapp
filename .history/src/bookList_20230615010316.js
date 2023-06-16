import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BooksList.module.css';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://68.178.162.203:8080/application-test-v1.1/books');
        console.log('API response:', response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setBooks(response.data.data);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <br/>
      <h1>Books List:</h1>
      <ul className={styles.booksGrid}>
        {currentBooks.map((book) => (
          <li key={book.id} className={styles.bookItem}>
            <div className={styles.titleBox}>{book.title}</div>
            <div>{book.author} - {book.language}</div>
          </li>
        ))}
      </ul>
      <div className={styles.paginationContainer}>
        <button className={styles.paginationButton} onClick={prevPage}>&laquo; Prev</button>
        <button className={styles.paginationButton} onClick={nextPage}>Next &raquo;</button>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default BooksList;
