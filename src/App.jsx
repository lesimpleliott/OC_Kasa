import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Host from "./pages/Host";
import Error from "./pages/Error";

import BaseDataContext from "./context/BaseDataContext";
import baseData from "./assets/base.json";

const App = () => {
    return (
        // Provider enveloppe tous les components ? 
        <BaseDataContext.Provider value={baseData}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/host/:id" element={<Host />} />
                    <Route path="/host" element={<Host />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </BaseDataContext.Provider>
    );
};

export default App;
