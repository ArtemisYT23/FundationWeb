import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Sucre from "../../../assets/logoFundation.png";

export const Sladers = () => {
  const { sladerState } = useSelector((store) => store);
  const { SladersInitial } = sladerState;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <ContainerSlider>
        <FirstContainer>
          <div>
            <img src={Sucre} alt="Cargando" />
          </div>
        </FirstContainer>

        <SecondContainer>
          <ContentSlader>
            <ContentImage>
              <Carousel {...settings}>
                {SladersInitial.map((img, i) => (
                  <div key={i}>
                    <img src={img.imagen} alt="...cargando" />
                  </div>
                ))}
              </Carousel>
            </ContentImage>
          </ContentSlader>
        </SecondContainer>
      </ContainerSlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    overflow: hidden;
    &:hover {
      opacity: 1;
      transition: 250ms all;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }
`;

const ContainerSlider = styled.div`
  width: 100%;
  height: 480px;
  background-color: var(--PrimaryColor);
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FirstContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin: 1rem 0 0 0;

    div {
      width: 250px;
      height: 100%;
    }
  }
`;

const SecondContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ContentSlader = styled.div`
  width: 95%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1ecec;

  @media screen and (max-width: 767px) {
    height: 260px;
    margin: 1rem;
  }
`;

const ContentImage = styled.div`
  width: 92%;
  height: 90%;
  overflow: hidden;

  img {
    width: 100%;
    height: 10%;
  }
`;
