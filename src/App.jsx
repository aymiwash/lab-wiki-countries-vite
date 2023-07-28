import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Route, Routes } from 'react-router-dom'

const baseURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage baseURL={baseURL} />} />
          <Route path="/:countryId" element={<CountryDetails baseURL={baseURL} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
