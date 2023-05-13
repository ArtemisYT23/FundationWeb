import styled from "styled-components";
import Prueba from "../../../assets/fundaciones.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Fondo from "../../../assets/fondoForm.png";
import { useEffect, useState } from "react";

export const TallerDetail = () => {
  const { tallerState, imgTallerState, comentaryState } = useSelector(
    (store) => store
  );
  const { TallerSelect } = tallerState;
  const { imagenTallerData } = imgTallerState;
  const { ComentaryData } = comentaryState;
  const [comentary, setComentary] = useState([]);
  const [slader, setSlader] = useState([]);

  useEffect(() => {
    const SelectImagen = [];
    const SelectComentary = [];
    imagenTallerData.map((img) => {
      if (img.id_Taller == TallerSelect?.id) {
        SelectImagen.push(img);
      }
    });

    ComentaryData.map((comen) => {
      if (comen.id_Taller == TallerSelect?.id) {
        SelectComentary.push(comen);
      }
    });
    setComentary(SelectComentary);
    setSlader(SelectImagen);
  }, [TallerSelect]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container imagen={Fondo}>
      <ContainerContent>
        <ContentTitle>
          <span>Charla</span>
          <h1>{TallerSelect?.title}</h1>
        </ContentTitle>
        <ContentImage imagen={slader[0]?.imagen} />
        <Content>
          <FirstContent>
            <ContentTextOne>
              <div>
                <span>{TallerSelect?.review}</span>
              </div>
            </ContentTextOne>
          </FirstContent>
          <SecondContent>
            <ContentSlader>
              <ImgContainer>
                <Carousel {...settings}>
                  {slader.map((img, i) => (
                    <div key={i}>
                      <img src={img.imagen} alt="...cargando" />
                    </div>
                  ))}
                </Carousel>
              </ImgContainer>
            </ContentSlader>
          </SecondContent>
        </Content>

        {comentary.map((item, i) => (
          <ContentComentary key={i}>
            <Comentary>
              <img src={item.imagen} alt="prueba" />
              <h1>{item.nameComentary}</h1>
            </Comentary>
            <ComentaryBody>
              <h1>{item.title}</h1>
              {item.review}
            </ComentaryBody>
          </ContentComentary>
        ))}

        <ContentRecomendation>
          <h1>Recomendaciones</h1>
          <span>{TallerSelect?.recommendation}</span>
        </ContentRecomendation>
      </ContainerContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url(${((props) => props.imagen)});
`;

const ContainerContent = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 0 0 0;
  /* background: green; */

  span {
    color: purple;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 23px;
  }

  h1 {
    color: purple;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
  }
`;

const ContentImage = styled.div`
  width: 700px;
  height: 550px;
  background-image: url(${(props) => props.imagen});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const SecondContent = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentSlader = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 13px;
  overflow: hidden;

  img {
    width: 100%;
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

const ContentComentary = styled.div`
  width: 100%;
  /* background-color: yellow; */
  margin: 1rem 0 1rem 0;
`;

const Comentary = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin: 0 1rem 0 0;
    object-fit: cover;
  }

  h1 {
    font-size: 18px;
    color: #747272;
  }
`;

const ComentaryBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 1rem 0 1rem 0;

  h1 {
    font-size: 22px;
    color: #797777;
  }
`;

const ContentRecomendation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ebc4f3;
  text-align: center;
  padding: 1rem;
  margin: 1rem 0 1rem 0;

  h1 {
    font-family: Segoe Script;
    color: #69047e;
  }

  span {
    color: #535353;
    width: 80%;
  }
`;
