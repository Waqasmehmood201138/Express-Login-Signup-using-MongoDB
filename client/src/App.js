import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Components/Signup';
import Database from './Components/Database';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/database' element={<Database />} />
          <Route path='/edit' element={<EditUser/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
