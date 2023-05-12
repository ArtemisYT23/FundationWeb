import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes/routes";
import { useDispatch } from "react-redux";
import { get_sladers_initial_view } from "./redux/States/Slader";
import { getAllComentary } from "./redux/States/Comentary";
import { getAllVideo } from "./redux/States/Video";
import { getAllTaller } from "./redux/States/Taller";
import { getAllImagenTallerData } from "./redux/States/ImagenTaller";
import { useEffect } from "react";
import { PublicRoute } from "./pages/PublicRoute";
import { LoginSesion } from "./pages/LoginSesion";
import AuthGuard from "./Guards/auth.guard";
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_sladers_initial_view());
    dispatch(getAllComentary());
    dispatch(getAllVideo());
    dispatch(getAllTaller());
    dispatch(getAllImagenTallerData());
  }, [dispatch]);

  return (
    <div>
      <HashRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to={PublicRoutes.initialState} />}
          />
          <Route
            path={`${PublicRoutes.initialState}/*`}
            element={<PublicRoute />}
          />

          <Route path={PublicRoutes.loginAdmin} element={<LoginSesion />} />

          <Route element={<AuthGuard />}>
            <Route
              path={`${PrivateRoutes.private}/*`}
              element={<PrivateRoute />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
