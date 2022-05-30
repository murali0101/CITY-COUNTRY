
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddCountry } from './components/AddCountry/AddCountry';
import { NavBar } from './components/NavBar/NavBar';
import { Table } from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddCountry/>
      <Routes>
        <Route path='/' element={<Table/>}>
        

        </Route>
      </Routes>
    </div>
  );
}

export default App;
