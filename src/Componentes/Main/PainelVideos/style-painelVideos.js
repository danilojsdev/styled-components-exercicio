import styled from "styled-components";

export const PainelContainer = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`;

export const Imagem = styled.img`
    width: 100%;
    height: 200px;
`;