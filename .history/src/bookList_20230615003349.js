import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://68.178.162.203:8080/application-test-v1.1/books');
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    // Render the list of books
  };