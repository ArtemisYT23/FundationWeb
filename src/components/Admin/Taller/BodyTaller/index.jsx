import styled from "styled-components";
import { Toaster } from "react-hot-toast";
import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  EditElement,
  DeleteElement,
} from "../../../../../assets/Icons/Icons";
import {
  openModalCreatedTaller,
  getFilterTallerSelected,
} from "../../../../redux/States/Taller";
import { TallerCreatedModal } from "../Modal/ModalCreate";
import { TallerUpdateModal } from "../Modal/ModalUpdate";
import { TallerDeleteModal } from "../Modal/ModalDelete";

export const BodyTaller = () => {
  const dispatch = useDispatch();
  const { tallerState } = useSelector((store) => store);
  const { TallerData } = tallerState;
  const [gridApi, setGridApi] = useState({});

  const EditTypeFile = (props) => {
    const invokeParentMethod = () => {
      dispatch(getFilterTallerSelected(props.node.data.id, "edit"));
    };

    return (
      <ButtonOptions onClick={invokeParentMethod}>
        <EditElement x={30} y={30} />
      </ButtonOptions>
    );
  };

  const DeleteTypeFile = (props) => {
    const invokeParentMethod = () => {
      dispatch(getFilterTallerSelected(props.node.data.id, "delete"));
    };

    return (
      <ButtonOptions onClick={invokeParentMethod}>
        <DeleteElement x={30} y={30} />
      </ButtonOptions>
    );
  };

  const DataTaller = [
    {
      headerName: "Nombre",
      field: "title",
      filter: true,
      minWidth: 260,
      rezisable: true,
      sortable: true,
      floatingFilter: true,
      cellStyle: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
    },
    {
      headerName: "Descripcion",
      field: "review",
      filter: true,
      minWidth: 260,
      rezisable: true,
      sortable: true,
      floatingFilter: true,
      cellStyle: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
    },
    {
        headerName: "Recomendacion",
        field: "recommendation",
        filter: true,
        minWidth: 260,
        rezisable: true,
        sortable: true,
        floatingFilter: true,
        cellStyle: () => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }),
      },
      {
        headerName: "Fecha",
        field: "dateTaller",
        filter: true,
        minWidth: 260,
        rezisable: true,
        sortable: true,
        floatingFilter: true,
        cellStyle: () => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }),
      },
    {
      headerName: "Editar",
      field: "",
      filter: false,
      cellRenderer: EditTypeFile,
      minWidth: 90,
      rezisable: true,
      sortable: true,
      floatingFilter: false,
      cellStyle: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
    },

    {
      headerName: "Eliminar",
      field: "",
      filter: false,
      cellRenderer: DeleteTypeFile,
      minWidth: 90,
      rezisable: true,
      sortable: true,
      floatingFilter: false,
      cellStyle: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
    },
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      flex: 1,
      minWidth: 140,
      filter: true,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const onFilterTextBoxChanged = () => {
    gridApi.setQuickFilter(document.getElementById("filter-text-box").value);
  };

  const pagination = true;
  const paginationPageSize = 300;

  const OpenModalComentaryCreated = () => {
    dispatch(openModalCreatedTaller(true));
  };

  return (
    <ContainerIndex>
      <HeadersContainer>
        <ContainerButton>
          <NewIndex onClick={() => OpenModalComentaryCreated()}>Nuevo</NewIndex>

          <>
            <SearchUser
              type="text"
              id="filter-text-box"
              placeholder=" Buscar Taller"
              onInput={onFilterTextBoxChanged}
            />
            <ButtonSearch>
              <Search X={22} Y={22} />
            </ButtonSearch>
          </>
        </ContainerButton>
      </HeadersContainer>
      <br />

      <TableContainer>
        <Table>
          <div
            id="myGrid"
            style={{ width: "100%", height: "100%" }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              onGridReady={onGridReady}
              rowData={TallerData}
              columnDefs={DataTaller}
              defaultColDef={defaultColDef}
              animateRows={true}
            ></AgGridReact>
          </div>
        </Table>
      </TableContainer>

       <TallerCreatedModal />
      <TallerUpdateModal />
      <TallerDeleteModal /> 

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          duration: 3500,
          style: {
            background: "#1b96bb",
            color: "#fff",
          },
        }}
      />
    </ContainerIndex>
  );
};

const ContainerIndex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem 0 0 0;
`;

const HeadersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ContainerButton = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-start;
`;

const NewIndex = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 0 0.5rem 0 0;
  width: 20%;
  color: #fff;
  background-color: #1b96bb;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.5rem 0.5rem;
  cursor: pointer;
`;

const ButtonSearch = styled.button`
  padding: 0.5rem;
  width: 2.2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1b96bb;
  background: none;
`;

const SearchUser = styled.input`
  width: 45%;
  height: 2rem;
  outline: none;
  border: 1px solid #1b96bb;
  color: #5d5c5c;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.div`
  width: 90%;
  height: 100%;
`;

const ButtonOptions = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ContainerImg = styled.div`
  width: 60px;
  height: 50px;

  img {
    width: 60px;
    height: 50px;
  }
`;
