import styled from "styled-components";

export const CardContainer = styled.article`
    display: grid;
    grid-template-columns: repeat (4, 1fr);
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: center;
`;

export const SectionCards = styled.section`
    display: flex;
    width: 90vw;
    height: 80vh;
    flex-wrap: wrap;
    gap: 10px;
`;