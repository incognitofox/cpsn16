import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/FAQ";


function App() {
  return (  
	<BrowserRouter basename={process.env.URL}>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/FAQ" element={<FAQ />} />`.
      </Routes>
    </BrowserRouter>
  );
}

export default App;
