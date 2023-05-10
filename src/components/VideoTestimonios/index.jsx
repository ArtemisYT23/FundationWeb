import styled from "styled-components";
import { useState } from "react";

export const VideoTestimonios = () => {
  const [getUrl, setGetUrl] = useState(
    "https://www.youtube.com/embed/JNZ0bkAGgKU"
  );

  return (
    <Containercard>
      <ContentCard>
        <ContainerTitle>
          <h1>¿Quieres conocer más sobre la labor de cada fundación?</h1>

          <span>
            Te invitamos a escuchar los testimonios de algunos de sus
            representantes:
          </span>
        </ContainerTitle>
        <ContainerVideos>
          <ContentPlay>
            <FirstPlayVideo>
              <iframe
                width="95%"
                height="95%"
                src={getUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </FirstPlayVideo>
            <SecondPlayList>
              <CardInfo>
                <span>Más testimonios:</span>
              </CardInfo>

              <Card>
                <div
                  onClick={(e) =>
                    setGetUrl("https://www.youtube.com/embed/JNZ0bkAGgKU")
                  }
                >
                  <img
                    src="https://blogstorage10prueba.blob.core.windows.net/datablog/Container"
                    alt="...cargando"
                  />
                  <p>Fundación "María Guare"</p>
                </div>
              </Card>

              <Card>
                <div
                  onClick={(e) =>
                    setGetUrl("https://www.youtube.com/embed/SzXqae7Ww2o")
                  }
                >
                  <img
                    src="https://blogstorage10prueba.blob.core.windows.net/datablog/Container"
                    alt="...cargando"
                  />
                  <p>"Emmanuel en Victoria"</p>
                </div>
              </Card>

              <Card>
                <div
                  onClick={(e) =>
                    setGetUrl("https://www.youtube.com/embed/ifQckSHEIhU")
                  }
                >
                  <img
                    src="https://blogstorage10prueba.blob.core.windows.net/datablog/Container"
                    alt="...cargando"
                  />
                  <p>"Mujeres Sin Límites Cañar"</p>
                </div>
              </Card>
            </SecondPlayList>
          </ContentPlay>
        </ContainerVideos>
      </ContentCard>
    </Containercard>
  );
};

const Containercard = styled.div`
  width: 100%;
`;

const ContentCard = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  h1 {
    color: rgb(61, 165, 197);
    border-bottom: 1px solid rgb(61, 165, 197);
  }

  span {
    text-align: center;
    padding: 1rem 0 0 0;
  }
`;

const ContainerVideos = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
`;

const ContentPlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FirstPlayVideo = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondPlayList = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: initial;

  span {
    width: 80%;
    padding: 0.8rem;
    color: #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: initial;

  div {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: initial;
  }

  img {
    width: 75px;
    height: 50px;
  }

  p {
    margin: 0 0 0 1rem;
    color: #c4c4c4;
    font-size: 18px;
  }

  &:hover {
    background: #f7f0f0;
    
    p {
        color: #117c9c;
    }
  }
`;
