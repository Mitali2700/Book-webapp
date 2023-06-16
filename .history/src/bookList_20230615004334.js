import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      <h1>Books List:</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
