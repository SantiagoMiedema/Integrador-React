import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
height: 120px;
background: white;
width: 100%;
`

export const RedesContainerStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;

a{
    width: 40px;
    height: 40px;
    color: #152039;
    font-size: 2.4rem;
}

@media (max-width: 600px){
       gap: 10px;

       a{
        width: 30px;
        height: 30px;
        font-size: 1.2rem;
       }
    }

    @media (max-width: 400px){
        gap: 5px;
    }
`

export const LogoContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px){
        img{
            height: 40px;
        }
    }

    @media (max-width: 400px){
        height: 30px;
    }
`

export const CopyrightContainerStyled = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 20%;

@media (max-width: 600px){
        font-size: 14px;
    }
    @media (max-width: 400px){
        font-size: 12px;
    }
`