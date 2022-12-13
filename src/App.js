import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About';
import Home from './page/Home';
import Layout from './page/Layout';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:name' element={<ProductDetail />}> </Route>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;