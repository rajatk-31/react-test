import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import logoTransparent from "./assets/logo-transparent.png";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <div className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between !px-8 !py-2">
              <div>
                <Link to="/">
                  <img src={logoTransparent} alt="Logo" className="!h-8 " />
                </Link>
              </div>
              <div className="flex !space-x-4">
                <div>
                  <Link to="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="/about-me" className="hover:text-gray-300">
                    About Me
                  </Link>
                </div>
                <div>
                  <Link to="/Login" className="hover:text-gray-300">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
