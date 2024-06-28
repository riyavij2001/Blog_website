import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ArticlesListPage from './pages/ArticlesListPage';
import Article from './pages/Article';
import About from './pages/About';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles" element={<ArticlesListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
