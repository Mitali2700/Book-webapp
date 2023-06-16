import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BooksList.module.css';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const AddBookButton = () => {
  const handleAddBook = async () => {
    try {
      const response = await axios.post('http://68.178.162.203:8080/application-test-v1.1/books', {
        // Replace with the necessary data for adding the book
        title: 'New Book',
        author: 'Author Name',
        language: 'English',
      });
      
      console.log('Book added:', response.data);
      
      // Fetch the updated book list
      fetchData();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };;

  return (
    <button onClick={handleAddBook}>Add to Books List</button>
  );
};


const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
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

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

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
      <InputGroup mb={4} mt={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#7B2869" />}
        />
        <Input
          placeholder="Search by title"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ border: '2px solid #7B2869' }}
        />
      </InputGroup>
      <Box maxW="800px" mx="auto" px={4}>
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
          <br/>
        </div>
      </Box>
    </div>
  );
};

export default BooksList;
