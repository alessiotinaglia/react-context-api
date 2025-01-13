import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';
import Post from './pages/Post'; 
import Form from './pages/Form'; 
import HomePage from './pages/HomPage';  
import PostDetail from './pages/PostDetail';  
import Contatti from './pages/Contatti';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>          
          <Route path="/" element={<HomePage />} /> 
          <Route path="/HomePage" element={<HomePage />} /> 
          <Route path="/posts" element={<Post />} />  
          <Route path="/posts/:id" element={<PostDetail />} />  
          <Route path="/posts/form" element={<Form />} />
          <Route path="/Contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
