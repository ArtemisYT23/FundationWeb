import styled from "styled-components";
import { Donation, Voluntary, Post } from "../../../assets/Icons/Icons";

export const CardInfo = () => {
  return (
    <Containercard>
      <ContentCard>
        <ContainerTitle>
          <h1>Como Puedo Ayudar?</h1>

          <span>
            Si estas interezado en apoyar te mostramos algunad de las formas que podrias contribuir
          </span>
        </ContainerTitle>
        <ContentGrid>
          <Card>
            <Donation x={130} y={130} />
            <h1>DONA</h1>
          </Card>
          <Card>
            <Voluntary x={130} y={130} />
            <h1>SE VOLUNTARIO</h1>
          </Card>{" "}
          <Card>
            <Post x={130} y={130} />
            <h1>COMPARTE</h1>
          </Card>
        </ContentGrid>
      </ContentCard>
    </Containercard>
  );
};

const Containercard = styled.div`
  width: 100%;
`;

const ContentCard = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:767px){
   height: 100%;
  }
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  h1 {
    color: var(--PrimaryColor);
    border-bottom: 1px solid var(--PrimaryColor);
  }

  span {
    text-align: center;
    padding: 1rem 0 0 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media screen and (max-width:767px){
    span {
      width: 250px;
      text-align: center;
    }
  }
`;

const ContentGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:767px){
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 380px;
  height: 260px;
  background-color: var(--PrimaryColor);
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 25px;
    margin: 1rem 0 1rem 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
`;
