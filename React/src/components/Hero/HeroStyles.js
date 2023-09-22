import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    @media (max-width: 920px){
        flex-direction: column;
    }
`
export const HeroTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
color:#152039;

h1{
    font-size: 2.5rem;
    margin: 0 1rem 0 1rem
}
h2{
    font-size: 1.5rem;
}

span{
    color: #4D77D8;
}

p{
    font-size: 1rem;
    text-align: center;
    padding: 0 2rem 0 2rem;
    color:#152039;
    font-weight: 600;
}

@media (max-width:920px){
    width: 100%;
    align-items: center;
    text-align: center;
}

@media (max-width: 500px){
    h1{
        font-size: 1.7rem;
    }
    h2{
        font-size: 1.1rem;
    }
    p{
        font-size: 0.8rem;
        margin: 0 20px 20px 20px;
    }
    }
`

export const HeroImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: auto;

img{
    width: 90%;
    height: auto;
    border-radius: 15px;
}

@media (max-width:920px){
    width: 80%;
}
`