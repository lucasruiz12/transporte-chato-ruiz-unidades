import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home login</p>} />
        <Route path="/home" element={<p>Home ya logueado</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;