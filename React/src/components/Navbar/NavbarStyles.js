import { NavLink } from 'react-router-dom'
import styled from "styled-components";


export const NavbarContainerStyled = styled.header`
height: 100px;
width: 100%;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0rem 1rem;

img{
    padding-left: 1rem;
    height: 80px;
}
`
export const LinksContainerStyled = styled.ul`
    color: --blue-color;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a{
        padding: 0 1.5rem
    }
`

export const LinkContainerStyled = styled.div`
    font-size: 1.2rem;
    font-weight: 800;
    color: #152039 ;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const InicioContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 970px){
        display: none;
    }
`;

export const SobreNosotrosContainerStyled = styled(LinkContainerStyled)`
@media (max-width: 970px){
        display: none;
    }`;

export const ProductosContainerStyled = styled(LinkContainerStyled)`
@media (max-width: 970px){
        display: none;
    }`;

export const ContactoContainerStyled = styled(LinkContainerStyled)`
@media (max-width: 970px){
        display: none;
    }`;

export const CarritoContainerStyled = styled(LinkContainerStyled)`
@media (max-width: 970px){
        display: none;
    }`;

export const SpanStyled = styled.span`
&:hover {
    text-decoration: underline;
}
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    cursor: pointer;
    font-size: 2rem;
    margin-right: 2rem;
    @media (max-width: 970px){
        display: flex;
    }
`;

export const NavLinkStyled = styled(NavLink)`
color: #152039;
`;
