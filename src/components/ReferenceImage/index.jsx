import styled from "styled-components";
import Donant from "../../../assets/fundaciones.jpg";

export const ReferenceImage = () => {
  return (
    <Container>
      <ContentImage image={Donant}>
        <h1>Charlas Y Talleres</h1>
        <span>
          Proyecto de Responsabilidad Social de Laboratorios Rocnarf que inició
          en Octubre del 2019 con el propósito de acercar médicos y
          especialistas de la salud a fundaciones y casas asistenciales de forma
          gratuita.
        </span>
      </ContentImage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContentImage = styled.div`
  width: 100%;
  height: 260px;
  background-image: url(${(props) => props.image});
  background-position: contain;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;

  h1 {
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    background-color: #0c759e;
  }

  span {
    color: #fff;
    background-color: #0c759e;
    width: 520px;
    text-align: center;
    margin: 1rem 0 1rem 0;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-style: italic;
  }

  @media screen and (max-width: 767px) {
    height: 270px;

    span {
      width: 350px;
    }
  }
`;
