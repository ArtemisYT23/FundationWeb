import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { openModalDeleteComentary, DeleteComentary } from "../../../../redux/States/Comentary";

const useStyless = makeStyles((theme) => ({
  DeleteComentary: {
    position: "absolute",
    width: "400px",
    height: "160px",
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

export const ComentaryDeleteModal = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { comentaryState } = useSelector((store) => store);
  const { ComentaryDelete, ComentarySelect } = comentaryState;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(DeleteComentary(ComentarySelect?.id));
    abrirCerrarModal();
  };

  const abrirCerrarModal = () => {
    dispatch(openModalDeleteComentary(false));
  };


  const CategoryView = (
    <div className={styless.DeleteComentary}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <TitleModal>Eliminar Comentario {ComentarySelect?.nameComentary}</TitleModal>
        </div>
        <br />
        <br />
        <div align="right">
          <SaveButton>Eliminar</SaveButton>

          <CancelButton onClick={() => abrirCerrarModal()}>
            Cancelar
          </CancelButton>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styless.container}>
      <Modal open={ComentaryDelete} onClose={abrirCerrarModal}>
        {CategoryView}
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