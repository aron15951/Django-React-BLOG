import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import SingleBlog from "./components/SingleBlog";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
