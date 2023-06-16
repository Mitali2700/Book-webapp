import './App.css';
import BookPage from './bookList';
import Footer from './components/footer';
import Navbar from './components/nav';


function App() {
  return (
    <div>
      <Navbar/>
      <BookPage/>
      <Footer/>
    </div>
  );
}

export default App;
