import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
export const BotonCategoria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ selected }) =>
    selected ? '#4D77D8' : '#152039'};
    
    color: white;
    border: none;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 15px;
    font-family: "Montserrat" ,sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: auto;
`