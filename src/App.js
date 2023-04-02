import './App.css';
import Arrowfun from './just';
import { Mouli } from './page1';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Mouli></Mouli>}></Route>
        <Route path='/dashboard' element={<Arrowfun/>}></Route>
      </Routes>
    </div>
  );
}

export default App;