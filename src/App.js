import './App.css';

import Home from '../src/Pages/Index';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Portfolio from '../src/Pages/Portfolio';
import Services from '../src/Pages/Services';
import Login from '../src/Pages/Login';
import Dashboard from '../src/Pages/Dashboard';

import AppDevelopment from '../src/Pages/App_Development';
import WebDevelopment from '../src/Pages/Web_Development';
import UiUxDesign from '../src/Pages/UiUx_page';
import BrandIdentity from '../src/Pages/Brand_Identity';
import DigitalMarketing from '../src/Pages/Digital_Marketing';
import GraphicDesign from '../src/Pages/Graphic_Desigen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/login' element={<Login />} />
           {/* <Route path='/dashboard' element={<Dashboard />} /> */}
           
           <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path='/app_development' element={<AppDevelopment />} />
          <Route path='/web_development' element={<WebDevelopment />} />
          <Route path='/uiux_design' element={<UiUxDesign />} />
          <Route path='/brand_identity' element={<BrandIdentity />} />
          <Route path='/digital_marketing' element={<DigitalMarketing />} />
          <Route path='/graphic_design' element={<GraphicDesign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
