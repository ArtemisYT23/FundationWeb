import { HeaderAdmin } from "../HeaderAdmin";
import styled from "styled-components";
import { BodyTaller } from "./BodyTaller";

export const Taller = () => {
  return (
    <Content>
      <HeaderAdmin title="Taller" />
      <BodyTaller />
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;
