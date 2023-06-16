import './App.css';
import BooksList from './bookList';
import Footer from './components/footer';
import Navbar from './components/nav';


function App() {
  return (
    <div>
      <Navbar/>
      <BooksList/>
      <Footer/>
    </div>
  );
}

export default App;
