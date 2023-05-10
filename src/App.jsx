import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes } from "./routes/routes";
import { PagesInitial } from "./pages/PagesInitial";
import { NavBar } from "./components/NavBar";
import { useDispatch } from "react-redux";
import { get_sladers_initial_view } from "./redux/States/Slader"
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_sladers_initial_view());
  },[dispatch])

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
