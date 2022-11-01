
import './App.css';
import {Route, Link} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={LandingPage} />
    </div>
  );
}

export default App;
