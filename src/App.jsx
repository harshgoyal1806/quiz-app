import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />         
          <Route path="quiz" element={<Quiz />} />    
          <Route path="about" element={<About />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
