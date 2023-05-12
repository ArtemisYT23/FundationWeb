import styled from "styled-components";
import { HeaderAdmin } from "../HeaderAdmin";
import { BodyImagenTaller } from "./BodyImagenTaller";

export const ImagenTaller = () => {
    return (
        <Content>
            <HeaderAdmin title="Imagenes Taller" />
            <BodyImagenTaller />
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
`;