// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login.jsx";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Login />
      </BrowserRouter>
    </>
  );
}

export default App;
