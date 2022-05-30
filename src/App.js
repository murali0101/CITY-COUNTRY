import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AddCity } from "./components/AddCity/AddCity";
import { AddCountry } from "./components/AddCountry/AddCountry";
import { NavBar } from "./components/NavBar/NavBar";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Table />}>
          {" "}
        </Route>
        <Route path="/add-city" element={<AddCity />}>
          {" "}
        </Route>
        <Route path="/add-country" element={<AddCountry />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
