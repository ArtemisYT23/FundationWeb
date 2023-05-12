import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalCreatedTaller,
  CreateTaller,
} from "../../../../redux/States/Taller";

const useStyless = makeStyles((theme) => ({
  CreatedComentary: {
    position: "absolute",
    width: "400px",
    height: "400px",
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

export const TallerCreatedModal = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { tallerState } = useSelector((store) => store);
  const { TallerCreate } = tallerState;
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [recomendation, setRecomendation] = useState("");
  const [dateTaller, setDateTaller] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      review: review,
      recommendation: recomendation,
      dateTaller: dateTaller,
    };
    dispatch(CreateTaller(formData));
    abrirCerrarModal();
  };

  const abrirCerrarModal = () => {
    dispatch(openModalCreatedTaller(false));
  };

  const ComentaryView = (
    <div className={styless.CreatedComentary}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <TitleModal>Crear Nuevo Taller</TitleModal>
        </div>
        <br />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          label="nombre del taller"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required={true}
          label="Descripcion"
          multiline={true}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <TextField
          value={recomendation}
          onChange={(e) => setRecomendation(e.target.value)}
          required={true}
          label="Recomendacion"
          multiline={true}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <TextField
          value={dateTaller}
          onChange={(e) => setDateTaller(e.target.value)}
          required={true}
          label="fecha taller"
          className={styless.textfield}
        />

        <br />
        <br />
        <div align="right">
          {title != "" &&
            recomendation != "" &&
            review != "" &&
            dateTaller != "" && <SaveButton>Crear</SaveButton>}

          <CancelButton onClick={() => abrirCerrarModal()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styless.container}>
      <Modal open={TallerCreate} onClose={abrirCerrarModal}>
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
