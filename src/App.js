import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import  {Routes, Route} from 'react-router-dom'
import './css/utils.css'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Sugar from './Components/Sugar';
import Oil from './Components/Oil';
import Atta from './Components/Atta';
import Peanut from './Components/Peanut';
import Mirchi from './Components/Mirchi';
import Rice from './Components/Rice';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      <Routes>
        <Route exact path='/sugar' element={<Sugar />} />
      </Routes>
      <Routes>
        <Route exact path='/oil' element={<Oil />} />
      </Routes>
      <Routes>
        <Route exact path='/atta' element={<Atta />} />
      </Routes>
      <Routes>
        <Route exact path='/mirch' element={<Mirchi />} />
      </Routes>
      <Routes>
        <Route exact path='/peanuts' element={<Peanut />} />
      </Routes>
      <Routes>
        <Route exact path='/rice' element={<Rice />} />
      </Routes>
      <Footer />
    </div>
  );
}
