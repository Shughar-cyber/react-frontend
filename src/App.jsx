import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login";
import navbar from "./component/Navbar";
import Signup from "./pages/Signup";

function App() {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;