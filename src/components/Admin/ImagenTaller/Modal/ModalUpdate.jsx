import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalUpdateImagenTaller,
  UpdateImagenTaller,
} from "../../../../redux/States/ImagenTaller";

const useStyless = makeStyles((theme) => ({
  UpdateComentary: {
    position: "absolute",
    width: "400px",
    height: "240px",
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
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
  },
  textfield: {
    width: "100%",
    height: "60px",
  },
  container: {
    textAlign: "center",
  },
}));

export const ImagenTallerUpdateModal = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { imgTallerState, tallerState } = useSelector((store) => store);
  const { imagenTallerUpdate, ImagenTallerSelect } = imgTallerState;
  const { TallerData } = tallerState;
  const [nameImage, setNameImage] = useState("");
  const [imagen, setImagen] = useState("");
  const [IdTaller, setIdTaller] = useState("");

  useEffect(() => {
    setNameImage(ImagenTallerSelect?.nameImage);
    setIdTaller(ImagenTallerSelect?.id_Taller);
  }, [ImagenTallerSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("NameImage", nameImage);
    formData.append("Imagen", imagen);
    formData.append("Id_Taller", IdTaller);
    dispatch(UpdateImagenTaller(formData, ImagenTallerSelect?.id));
    abrirCerrarModal();
    setNameImage("");
    setImagen("");
    setIdTaller("");
  };

  const abrirCerrarModal = () => {
    dispatch(openModalUpdateImagenTaller(false));
    setNameImage("");
    setImagen("");
    setIdTaller("");
  };

  const setFile = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const ComentaryView = (
    <div className={styless.UpdateComentary}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <TitleModal>Actualizar Imagen de taller</TitleModal>
        </div>
        <br />
        <br />

        <input
          type="file"
          onInput={(e) => {
            setFile(e);
          }}
        />

        <br />
        <br />

        <Selected onChange={(e) => setIdTaller(e.target.value)}>
          <option hidden>Seleccione Taller</option>
          {TallerData ? (
            TallerData.map((taller) => (
              <option key={taller.id} value={taller.id}>
                {taller.title}
              </option>
            ))
          ) : (
            <></>
          )}
        </Selected>

        <br />
        <br />
        <div align="right">
          {imagen != "" && <SaveButton>Actualizar</SaveButton>}

          <CancelButton onClick={() => abrirCerrarModal()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styless.container}>
      <Modal open={imagenTallerUpdate} onClose={abrirCerrarModal}>
        {ComentaryView}
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

export const Selected = styled.select`
  width: 100%;
  height: 2rem;
  text-align: center;
  color: var(--PrimaryColor);
  border: 1px solid var(--PrimaryColor);
  outline: none;
  border-radius: 10px;
`;
