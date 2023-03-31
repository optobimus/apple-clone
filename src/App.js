import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from './components/Homepage';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <Homepage/>
          </>
        }/>
      </Routes>
    </>
  )
}

export default App;
