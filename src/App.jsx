import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { RoutesPaths } from "./data/RoutePaths";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesPaths.HOME} element={<Home />} />
          <Route path={RoutesPaths.ABOUT} element={<About />} />
          <Route path={RoutesPaths.CONTACT} element={<Contact />} />
          <Route path={RoutesPaths.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
