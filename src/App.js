import './App.css';
import Header from './components/inc/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogDetails from './components/pages/BlogDetails';
import Footer from './components/inc/Footer';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog-details/:id" element={<BlogDetails />} />
          <Route path='*' element={<PageNotFound />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
