import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes } from "./routes/routes";
import { PagesInitial } from "./pages/PagesInitial";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <HashRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to={PublicRoutes.initialState} />} />
          <Route path={PublicRoutes.initialState} element={<PagesInitial />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
