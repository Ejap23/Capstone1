import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Nav from './components/nav/nav';
import Home from './components/landing/landing';
import About from './components/about/about';
import Products from './components/products/products';


function App() {
  return (
<>
<div>

<Router> 
<Nav/>
      <Routes>
   
        <Route path="/landing" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="*" element={<Navigate to="landing" />} />
      </Routes>
      
    </Router>



</div>


</>
  );
}

export default App;
