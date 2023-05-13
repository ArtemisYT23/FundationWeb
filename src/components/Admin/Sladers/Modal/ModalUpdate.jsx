import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalUpdateSlader,
  UpdateSlader,
} from "../../../../redux/States/Slader";

const useStyless = makeStyles((theme) => ({
  UpdateComentary: {
    position: "absolute",
    width: "400px",
    height: "260px",
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

export const SladerUpdateModal = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { sladerState } = useSelector((store) => store);
  const { sladerUpdate, SladerSelect } = sladerState;
  const [nameImage, setNameImage] = useState("");
  const [imagen, setImagen] = useState("");
  const [imgInitial, setImgInitial] = useState(false);
  const [imgInput, setImgInput] = useState(false);

  useEffect(() => {
    setNameImage(SladerSelect?.nameImagen);
    setImgInitial(SladerSelect?.imgInitial);
    setImgInput(SladerSelect?.imgInput);
  }, [SladerSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("NameImagen", nameImage);
    formData.append("Imagen", imagen);
    formData.append("ImgInitial", imgInitial);
    formData.append("ImgInput", imgInput);

    dispatch(UpdateSlader(formData, SladerSelect?.id));
    abrirCerrarModal();
    setNameImage("");
    setImagen("");
    setImgInitial(false);
    setImgInput(false);
  };

  const abrirCerrarModal = () => {
    dispatch(openModalUpdateSlader(false));
    setNameImage("");
    setImagen("");
    setImgInitial(false);
    setImgInput(false);
  };

  const setFile = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const ComentaryView = (
    <div className={styless.UpdateComentary}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <TitleModal>Actualizar Slader</TitleModal>
        </div>
        <br />
        <input
          type="file"
          onInput={(e) => {
            setFile(e);
          }}
        />

        <br />
        <br />

        <Selected onChange={(e) => setImgInitial(e.target.value)}>
          <option hidden>Slader inicial</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </Selected>

        <br />
        <br />

        <Selected onChange={(e) => setImgInput(e.target.value)}>
          <option hidden>Slader final</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
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
      <Modal open={sladerUpdate} onClose={abrirCerrarModal}>
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
