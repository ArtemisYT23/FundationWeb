import styled from "styled-components";
import Fundation from "../../../assets/fundaciones.jpg";

export const BodyInfo = () => {
  return (
    <ContainerBox>
      <Content>
        <FirstContent>
          <ContentTextOne>
            <div>
              <span>
                Apoyemos Causas Nobles, es una campaña de responsabilidad social
                de Laboratorios Rocnarf que nace con el objetivo de maximizar la
                voz de las fundaciones en el país, un sector que debido a la
                pandemia de COVID-19 ha sido olvidado y que hoy más que nunca
                nos necesita.
              </span>
            </div>
            <div>
              <span>
                Con esta labor se han beneficiado a más de 80,000 niños, mujeres
                embarazadas, adultos mayores y demás grupos vulnerables. Con
                nuestro apoyo a las fundaciones y las donaciones de medicamentos
                realizadas, hemos llegado a sectores como Daule, Napo, Orellana,
                Guayaquil, Quito, Esmeraldas, entre otros.
              </span>
            </div>
            <div>
              <span>
                Actualmente, en el catálogo han sido registradas <strong>+150
                fundaciones.</strong>
              </span>
            </div>
          </ContentTextOne>
          <ContentTextTwo>
            <div>
              <h1>Queremos ayudar a los que ayudan</h1>
              <span>
                Haciendo llegar su mensaje de solidaridad a más personas en todo
                el país y el mundo, para ello es importante conocer algunas
                problemáticas que enfrentan a diario.
              </span>
            </div>
          </ContentTextTwo>
        </FirstContent>
        <SecondContent>
          <ImgContainer imagen={Fundation}>
            <LabelData>Conoce las necesidades sociales del Ecuador</LabelData>
            <ButtonInfo>Ver Informe</ButtonInfo>
          </ImgContainer>
        </SecondContent>
      </Content>
    </ContainerBox>
  );
};

const ContainerBox = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
`;

const FirstContent = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentTextOne = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 80%;
    margin: 1rem 0 1rem 0;
  }

  span {
    width: 80%;
    text-align: justify;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const ContentTextTwo = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 80%;
    margin: 0 0 1rem 0;
  }

  h1 {
    color: var(--PrimaryColor);
    margin: 0 0 1rem 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
  }

  span {
    width: 80%;
    text-align: justify;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const SecondContent = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${(props) => props.imagen});
  background-position: 33% 75%;
  background-size: cover;
  opacity: 0.7;
`;

const LabelData = styled.label`
  color: var(--PrimaryColor);
  text-align: center;
  width: 250px;
  font-size: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0 0 1rem 0;
  font-weight: bold;
`;

const ButtonInfo = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #0a0220;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
