import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const HeaderAdmin = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderUP>
        <NameContainer>
          {title ? (
            <TextNameResource>
              <h1>{title}</h1>
            </TextNameResource>
          ) : (
            <Title>
              <h1>CATEGORIAS</h1>
            </Title>
          )}
        </NameContainer>
      </HeaderUP>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 4.8rem;
  border-bottom: 1px solid var(--PrimaryColor);
`;

const HeaderUP = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameContainer = styled.div`
  display: flex;
  margin: 0 0 0 2rem;
`;

const TextNameResource = styled.div`
  display: flex;
  text-align: justify;
  h1 {
    font-size: 25px;
    color: var(--PrimaryColor);
  }
`;

const Title = styled.div`
  width: 250px;
  display: flex;
  text-align: justify;
  h1 {
    font-size: 25px;
    color: var(--PrimaryColor);
  }
`;