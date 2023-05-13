import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

export const VideoTestimonios = () => {
  const { videoState } = useSelector((store) => store);
  const { VideoData } = videoState;

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

              {VideoData.map((video, i) => (
                <Card key={i}>
                  <div
                    onClick={(e) =>
                      setGetUrl(video.urlYoutube)
                    }
                  >
                    <img
                      src="https://blogstoragedatapruebas.blob.core.windows.net/datablog/Taller3"
                      alt="...cargando"
                    />
                    <p>{video.title}</p>
                  </div>
                </Card>
              ))}
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

  @media screen and (max-width:767px){
    height: 100%;
  }
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

  @media screen and (max-width:767px){
    height: 100%;

    h1 {
      margin: 1rem 0 1rem 0;
    }

    span {
      width: 240px;
      text-align: center;
      margin: 1rem 0 1rem 0;
    }
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

  @media screen and (max-width:767px){
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const FirstPlayVideo = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:767px){
    width: 100%;
  }
`;

const SecondPlayList = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:767px){
    width: 100%;
    align-items: center;
  }
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

  @media screen and (max-width:767px){
    width: 100%;

    span {
      width: 100%;
    }
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
