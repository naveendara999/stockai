import CarasoulSection from './CarasoulSection';
import './App.scss';
import Banner from './Banner';
import Helpsection from './Helpsection';
// import { Headers } from './Headers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { HomeHeaders } from './components/Homepage/HomeHeader';
import TopPicks from './components/Homepage/TabSection/TopPicks';
import Ideas from './components/Ideas';
import Transaction from './components/Transaction';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Banner />
          <CarasoulSection />
          <Helpsection />
          <Footer />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/toplist'>
          <HomeHeaders />
          <TopPicks />
        </Route>
        <Route path='/transaction'>
          <HomeHeaders />
          <Transaction />
        </Route>
        <Route path='/ideas'>
          <HomeHeaders />
          <Ideas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
