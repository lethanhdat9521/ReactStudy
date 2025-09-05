/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CalculatorFrame from "./components/Calculator/CalculatorFrame";
import { SharedProvider } from "./logics/calculateServices";

function App() {
  return (
    <>
      <SharedProvider>
        <CalculatorFrame></CalculatorFrame>
      </SharedProvider>
    </>
  );
  // return (
  //   <BrowserRouter>
  //     {/* Your app content */}
  //     <nav>
  //       <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
  //       <Link to="/contact">Contact</Link> | <Link to="/app1">App1</Link>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/app1" element={<Login />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}
function Home() {
  return (
    <>
      <h1>Hi</h1>
      <Link to="/app1">Home</Link>
    </>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
