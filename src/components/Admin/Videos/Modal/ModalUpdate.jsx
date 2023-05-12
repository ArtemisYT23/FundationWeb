import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalUpdateVideo,
  UpdateVideo,
} from "../../../../redux/States/Video";

const useStyless = makeStyles((theme) => ({
  CreatedVideo: {
    position: "absolute",
    width: "400px",
    height: "250px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "13px",
    overflow: "hidden",
    display: "flex",
    // overflowY: "scroll",
    // "&::-webkit-scrollbar": {
    //   width: "0.4em",
    // },
  },
  textfield: {
    width: "100%",
    height: "60px",
  },
  container: {
    textAlign: "center",
  },
}));

export const VideoUpdateModal = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { videoState } = useSelector((store) => store);
  const { VideoUpdate, VideoSelect } = videoState;
  const [title, setTitle] = useState("");
  const [urlYoutube, setUrlYoutube] = useState("");

  useEffect(() => {
    setTitle(VideoSelect?.title);
    setUrlYoutube(VideoSelect?.urlYoutube);
  }, [VideoSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      urlYoutube: urlYoutube,
    };
    dispatch(UpdateVideo(formData, VideoSelect?.id));
    abrirCerrarModal();
  };

  const abrirCerrarModal = () => {
    dispatch(openModalUpdateVideo(false));
  };

  const VideoView = (
    <div className={styless.CreatedVideo}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <TitleModal>Actualizar Video {VideoSelect?.title}</TitleModal>
        </div>
        <br />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          label="nombre del comentario"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={urlYoutube}
          onChange={(e) => setUrlYoutube(e.target.value)}
          required={true}
          label="Descripcion"
          className={styless.textfield}
        />

        <br />
        <br />
        <div align="right">
          {title != "" && urlYoutube != "" && (
            <SaveButton>Actualizar</SaveButton>
          )}

          <CancelButton onClick={() => abrirCerrarModal()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styless.container}>
      <Modal open={VideoUpdate} onClose={abrirCerrarModal}>
        {VideoView}
      </Modal>
    </div>
  );
};

export const TitleModal = styled.span`
  color: var(--PrimaryColor);
  font-size: 1.4rem;
  padding: 0 0 0.5rem 0;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  color: var(--PrimaryColor);
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 1.1rem;
  margin: 0.5rem;
  background: #fff;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  color: var(--PrimaryColor);
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 1.1rem;
  margin: 0.5rem;
  background: #fff;
  cursor: pointer;
`;
