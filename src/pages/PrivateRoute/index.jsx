import styled from "styled-components";
import { Navigate, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../../routes/routes";
import { NavBar } from "../../components/Admin/NavBar";
import { Comentary } from "../../components/Admin/Comentary";
import { Videos } from "../../components/Admin/Videos";
import { Taller } from "../../components/Admin/Taller";
import { Sladers } from "../../components/Admin/Sladers";
import { ImagenTaller } from "../../components/Admin/ImagenTaller";

export const PrivateRoute = () => {
  return (
    <Content>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.comentary} />} />
        <Route path={PrivateRoutes.comentary} element={<Comentary />} />
        <Route path={PrivateRoutes.video} element={<Videos />} />
        <Route path={PrivateRoutes.taller} element={<Taller />} />
        <Route path={PrivateRoutes.sladers} element={<Sladers />} />
        <Route path={PrivateRoutes.imagenTaller} element={<ImagenTaller />} />
      </Routes>
    </Content>
  );
};

export const Content = styled.div`
  width: 100%;
  display: flex;
`;
