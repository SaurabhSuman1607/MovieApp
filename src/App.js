import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import List from './component/List';
import Favourites from './component/favourites';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
function App() {
  return (
      <>      
       {/* <Navbar/>
       <Banner/>
       <List/> */}
      {/* <Favourites/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={
        <>
        <Banner/>
        <List />
        </>}/>
        <Route path="/Fav" element={<Favourites />}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
