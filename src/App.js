import CarasoulSection from './CarasoulSection';
import './App.scss';
import Banner from './Banner';
import Helpsection from './Helpsection';
import { Headers } from './Headers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <CarasoulSection />
      <Helpsection />
      <Footer />
    </div>
  );
}

export default App;
