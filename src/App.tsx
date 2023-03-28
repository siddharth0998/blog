import "./App.css";
import Home from "./views/pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "./views/pages/CreateBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createblog" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;
