import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";

export const AuthGuard = () => {
    const { sesion } = useSelector((store) => store);
    const { TockenUser } = sesion;
    return TockenUser ? <Outlet /> : <Navigate replace to={PublicRoutes.loginAdmin} />;
}

export default AuthGuard;