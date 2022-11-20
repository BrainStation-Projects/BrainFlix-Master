import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUploadPage from './pages/VideoUploadPage';


function App() {

  const API_URL = "http://localhost:8081";

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home API_URL={API_URL} />} />
          <Route path='/videos/:id' element={<Home API_URL={API_URL} />} />
          <Route path='upload' element={<VideoUploadPage API_URL={API_URL} />} />
          <Route path='*' element={<h2>Oops! Page not found.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
