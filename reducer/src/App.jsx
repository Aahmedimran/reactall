
import Home from './component/home'
import About from './component/about'
import Navbar from './component/navbar'
import Product from './component/product'
import Signup from './component/signup'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
<Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/"  element={<Home />} />
        </Routes>
      
    </Router>
  );
}

export default App;
