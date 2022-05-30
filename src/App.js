
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Table } from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Table/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
