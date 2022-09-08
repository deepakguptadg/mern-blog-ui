import './App.css';
import Header from './components/inc/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogDetails from './components/pages/BlogDetails';
import Footer from './components/inc/Footer';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';
import AdminHeader from './Admin/Inc/Header';
import Login from './Admin/Pages/Login';
import Dashboard from './Admin/Pages/Dashboard';
import BlogList from './Admin/Pages/BlogList';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home Header={Header} /> } />
          <Route exact path="/blog-details/:id" element={<BlogDetails Header={Header}/>} />

          {/* Admin Routing */}
          <Route path='/admin' element={<Login />} />  
          <Route path='/admin-dashboard' element={<Dashboard Header={AdminHeader}/>} />  
          <Route path='/admin-blog-list' element={<BlogList Header={AdminHeader}/>} />  

          <Route path='*' element={<PageNotFound />} /> 
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
