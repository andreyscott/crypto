// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Example from './layout/Nav';
import { Home} from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Example />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
   </BrowserRouter>

  );
}

export default App;
