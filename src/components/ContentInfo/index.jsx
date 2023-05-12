import styled from "styled-components";
import Donation from "../../../assets/donaciones.jpg";

export const ContentInfo = () => {
  return (
    <Container>
      <ContainerData>
        <FirstContent>
          <div>
            <p>
              ¡Únete a nuestra
              <strong> campaña de donaciones!</strong>
            </p>
          </div>
          <div>
            <span>
              Además de crear este espacio para difundir cada fundación y su
              actividad dentro del país, hemos aportado con nuestras donaciones
              de medicina, aportando así con nuestro granito de arena.
              <strong> ¿Quieres hacerlo tú también?</strong>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <label>¡Trabajemos juntos!</label>
          </div>
        </FirstContent>
        <SecondContent>
          <div>
            <img src={Donation} alt="..cargando" />
          </div>
        </SecondContent>
      </ContainerData>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContainerData = styled.div`
  width: 76%;
  height: 450px;
  display: flex;
  justify-content: center;
`;

const FirstContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: var(--PrimaryColor);
    font-size: 34px;
  }

  label {
    font-family: Segoe Script;
    color: var(--PrimaryColor);
    font-size: 24px;
  }

  div {
    width: 80%;
    margin: 1rem 0 1rem 0;
  }

  span {
    width: 80%;
    text-align: justify;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const SecondContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    height: 80%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
