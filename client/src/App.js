// import logo from './logo.svg';
// import './App.css';
import FormProduct from "./components/FormProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormeditProduct from "./components/FormeditProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello, React!</h1>
        <Routes>
          <Route path="/" element={<FormProduct />} />
          <Route path="/edit/:id" element={<FormeditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
