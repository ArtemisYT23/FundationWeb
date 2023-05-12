import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export const SladerCard = () => {
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
        <ContainerTitle>
          <h1>Nuestros aportes: </h1>
          <span>
            Nuestro compromiso es ayudar y nuestra mision hacerlo posible 
          </span>
        </ContainerTitle>
      <ContainerSlider>
        <SecondContainer>
          <ContentImage>
            <Carousel {...settings}>
              {SladersInitial.map((img, i) => (
                <div key={i}>
                  <img src={img.imagen} alt="...cargando" />
                </div>
              ))}
            </Carousel>
          </ContentImage>
        </SecondContainer>
      </ContainerSlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContainerSlider = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

const SecondContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ContentImage = styled.div`
  width: 350px;
  height: 290px;

  img {
    width: 350px;
    height: 250px;
  }
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  h1 {
    color: var(--PrimaryColor);
    border-bottom: 1px solid rgb(61, 165, 197);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  span {
    text-align: center;
    padding: 1rem 0 0 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
