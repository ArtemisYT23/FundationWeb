import { HeaderAdmin } from "../HeaderAdmin";
import styled from "styled-components";
import { BodyVideo } from "./BodyVideo";

export const Videos = () => {
  return (
    <ContentContainer>
      <HeaderAdmin title="Videos" />
      <BodyVideo />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    padding: 0;
  }
`;