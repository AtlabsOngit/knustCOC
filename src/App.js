import './App.css';
import { Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" render={<LandingPage/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
