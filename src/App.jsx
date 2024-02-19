import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Host from "./pages/Host";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/host/:id" element={<Host />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;