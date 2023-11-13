import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import EnterPage from "./Components/Enter-Page/Enter-Page";
import './App.scss';
import Footer from "./Components/Footer/Footer";
export default function MainPage() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="Finding-pets" element={<EnterPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

