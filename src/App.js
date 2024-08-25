import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Desktop/header";
import Category from './components/left_category/category';
import Home from './components/Home/home';
import Lids from "./components/Lids/lids";
import Teachers from "./components/Teachers/teachers";
import Group from "./components/Groups/group";
export default function App() {
  return (
    <>

      <BrowserRouter>
      <Header />
      <Category />
        <Routes>
            <Route index element={<Home />} />
            <Route path="lid" element={<Lids />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="group" element={<Group />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
