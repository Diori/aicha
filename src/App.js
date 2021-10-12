import './App.css';

import { HiMenu } from 'react-icons/hi';
import {BiPhoneCall,BiHome} from 'react-icons/bi';
import {BsGraphUp} from 'react-icons/bs';
import {IoNewspaperOutline} from 'react-icons/io5';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Evaluer from './pages/Evaluer';
import HomeUser from './pages/HomeUser';
import Testfrom from './pages/formulaire/Testform';
import Gestion from './pages/formulaire/Gestion';



function App() {
  return (
    <Router>
    <div className="App">
      <header className="header App-header ">
      <nav className='nav'>
      <div className='nav__menu' >
        <ul className='nav__list grid'>
        <li className='nav__item'>
            <Link to="/" className='nav__link'>
             <BiHome className='nav__icon' /><br></br>Accueil
            </Link>
          </li>
          <li className='nav__item'>
            <Link to="/actualite" className='nav__link'>
             <IoNewspaperOutline className='nav__icon' /><br></br>Actualité
            </Link>
          </li>
          <li className='nav__item'>
            <Link to="/evaluer" className='nav__link'>
            <BsGraphUp className='nav__icon' /><br></br>Evaluer
            </Link>
          </li>
          <li className='nav__item'>
            <Link to="/call" className='nav__link'>
            <BiPhoneCall className='nav__icon' /><br></br>Appel urgence
            </Link>
          </li>
        </ul>
     
        
        <div className='btn' ><HiMenu /></div>  
      </div>
    </nav>
 </header>
 <Switch>
  <main>
  <Route path="/" exact>
     <Home/>
  </Route>
  <Route path="/evaluer">
    <Evaluer />
  </Route>
  <Route path='/home_user'>
  <HomeUser />
  </Route>
  <Route path='/test'>
  <Testfrom />
  </Route>
  <Route path='/gestion'>
  <Gestion />
  </Route>


 </main>
 

 </Switch>
    </div>
    </Router>
  );
}

export default App;
