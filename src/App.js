import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';



import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';
import Wishlist from './components/pages/Wishlist';
import Order from './components/pages/Order';
import Checkout from './components/pages/Checkout';

import Login from './components/pages/Login';
import Shop from './components/pages/Shop';
import Single from './components/pages/Single';
import NavigationBar from './components/partials/NavigationBar';
import Footer from './components/partials/Footer';




function App() {
  return (
    <div className="App">

	    <Router>
    		<NavigationBar />
	      <Switch>
	        <Route path='/' exact component={Home} />
	        <Route path='/about' component={About} />
	        <Route path='/shop' component={Shop} />
	        <Route path='/login' component={Login} />
	        <Route path='/contact' component={Contact} />
	        <Route path='/pet' component={Single} />
	        <Route path='/cart' component={Cart} />
	        <Route path='/wishlist' component={Wishlist} />
	        <Route path='/order' component={Order} />
	        <Route path='/checkout' component={Checkout} />

	      </Switch>
	      <Footer />
	    </Router>
   
    </div>
  );
}

export default App;
