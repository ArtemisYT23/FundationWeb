import { HeaderAdmin } from "../HeaderAdmin"
import styled from "styled-components";
import { BodySlader } from "./BodySlader";
 
export const Sladers = () => {
    return (
        <Content>
            <HeaderAdmin title="Sladers" />
            <BodySlader />
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
`;
