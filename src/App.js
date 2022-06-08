import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Menu from './common/Menu';
import ToDoAssignment from './component/ToDoAssignment';
import ComponentModal from './component/ComponentModal';
import DigitalClock from './component/DigitalClocks';
import DigitalClockClass from './component/ComponentDigitalClockClass';
import EMI from './component/EMICalculator/EMI';
import CurrencyConverter from './component/CurrencyConverter/CurrencyConverter';
import './sass/Style.scss'
import ContextDemo from './component/ThemeSwitcher/ContextDemo';
import WeatherApp from './component/WeatherApp/WeatherApp';
import NotFound from './common/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Menu />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-lg-12 main-wrapper'>
              <Routes>
                {/*Default route*/}
                <Route path='/' element={<ToDoAssignment />} />
                {/*Default route*/}
                <Route path='/compmodal' element={<ComponentModal />} />
                <Route path='/todo' element={<ToDoAssignment />} />
                <Route path='/digiclock' element={<DigitalClock />} />
                <Route path='/digiclockclass' element={<DigitalClockClass />} />
                <Route path='/emicalc' element={<EMI />} />
                <Route path='/currencyconverter' element={<CurrencyConverter />} />
                <Route path='/contextdemo' element={<ContextDemo />} />
                <Route path='/apijsonserver' element={<WeatherApp />} />
                <Route path='/weatherapp' element={<WeatherApp />} />

                {/* 404/Page Not Found route*/}
                <Route path="*" element={<NotFound />} />
                {/*404/Page Not Found route*/}
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
