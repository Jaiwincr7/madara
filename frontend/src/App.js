import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/Slider";
import Multi from "./components/anime";
import Comments from "./components/comments";
import Container from "./components/container";
import Footer from "./components/footer";
import Signup from "../src/Sign-in";
import Login from "../src/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

let value=[];
function App() {
   
  const [users, setUsers] = useState([ ]);
  axios
    .get("http://localhost:5000/data")
    .then((res) => {
      setUsers(res.data);
      value=res.data;
    //   console.log(users[1].user);
    })
    .catch((err) => {
      // Error handling
      console.log(err);
      return null;
    });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element />
        </Routes>
        <header>
          <Navbar />
          <Slider />
        </header>
        <Multi />
        <Comments />
        <Container />
        <Footer />
      </Router>
    </div>
  );
}
// export {value};
export default App;
