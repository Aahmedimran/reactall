import './App.css';
import Home from './component/home';
import About from './component/about';
import Login from './component/login';
import Signup from './component/signup';
import Gallery from './component/gallery';
import Navbar from './component/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (

<>

    <Router>
      <Navbar />

      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sinup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        </Routes>

        </Router>
</>
        );
}

        export default App;
