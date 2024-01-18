import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { ROUTER } from './ROUTER';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Favorites } from './pages/Favorites';
import { Basket } from './pages/Basket';

function App() {
  return (
    <div className="App">
       <Header/>
    
<Routes>

<Route path={ROUTER.HOME} element={<Home/>}/>
<Route path={ROUTER.ABOUT} element={<About/>}/>

<Route path={ROUTER.CONTACT} element={<Contact/>}/>
<Route path={ROUTER.FAVORITES} element={<Favorites/>}/>


<Route path={ROUTER.BASKET} element={<Basket/>}/>

</Routes>

    </div>
  );
}

export default App;
