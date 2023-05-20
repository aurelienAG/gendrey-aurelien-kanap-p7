import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Lodgingpage from './pages/Lodgingpage/Lodgingpage';
import Error from './pages/Error/Error';


function App() {
  return (
    <div className="pageBloc">
    <Routes>
      <Route path="/" element = {<Homepage />}/> 
      <Route path="/about" element = { <About />}/> 
      <Route path="/lodging/:id" element = {<Lodgingpage/>}/> 
      <Route path="/error" element={<Error />} />
       <Route path="*" element={<Error />} />
    </Routes>
      </div>
  );
}

export default App;
