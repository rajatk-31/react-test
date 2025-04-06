import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { AppProvider } from "./context/AppContext";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen">
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="hover:text-gray-300">
                  About Me
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
