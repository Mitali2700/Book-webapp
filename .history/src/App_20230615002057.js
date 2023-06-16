import './App.css';
import BookPage from './bookPage';
import Footer from './components/footer';
import Nav from './components/nav'

function App() {
  return (
    <div>
      <Nav/>
      <BookPage/>
      <Footer></Footer>
    </div>
  );
}

export default App;
