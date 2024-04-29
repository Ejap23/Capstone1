import './App.css';
import {
  BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Home from './components/landing/landing';
import About from './components/about/about';
import Products from './components/products/products';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
<>
<div>

<Router> 

      <Routes>
   
        <Route path="/landing" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/dashboard" element={<Dashboard />} />
        

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="landing" />} />
      </Routes>
      
    </Router>



</div>


</>
  );
}

export default App;
