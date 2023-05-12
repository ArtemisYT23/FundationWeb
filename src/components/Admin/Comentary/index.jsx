import { HeaderAdmin } from "../HeaderAdmin";
import styled from "styled-components";
import { BodyComentary } from "./BodyComentary"

export const Comentary = () => {
  return (
    <ContentContainer>
      <HeaderAdmin title="Comentarios" />
      <BodyComentary />
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
