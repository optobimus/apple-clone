import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from './components/Homepage';
import Banner from './components/Banner';
import Colors from './components/Colors';
import Watchpreview from './components/Watchpreview';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <Homepage/>
            <Colors/>
            <Watchpreview/>
          </>
        }/>
      </Routes>
    </>
  )
}

export default App;
