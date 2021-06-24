import CarasoulSection from './CarasoulSection';
import './App.scss';
import Banner from './Banner';
import Helpsection from './Helpsection';
import { Headers } from './Headers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

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
      </Switch>
    </Router>
  );
}

export default App;
