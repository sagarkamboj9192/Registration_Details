import './App.css';
import logo from './logo.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Registerstudent';
import Detail from './pages/Studentdetail';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <img src={logo} alt="teri" />
          
          <Link to="/">Home Page</Link>
          <Link to="/register">Register</Link>
          <Link to="/detail">Students Details</Link>
          <Link to="/search">Search Data</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
