import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { PublicRoutes } from "../../routes/routes";
import { PagesInitial } from "../PagesInitial";
import { PagesTaller } from "../PagesTaller";
import { TallerDetail } from "../TallerDetail";
import styled from "styled-components";

export const PublicRoute = () => {
  return (
    <Content>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={PublicRoutes.informationFundation} />}
        />
        <Route
          path={PublicRoutes.informationFundation}
          element={<PagesInitial />}
        />
        <Route
          path={PublicRoutes.tallerInformation}
          element={<PagesTaller />}
        />
        <Route
          path={PublicRoutes.tallerDetails}
          element={<TallerDetail />}
        />
      </Routes>
    </Content>
  );
};

export const Content = styled.div`
  width: 100%;
`;
