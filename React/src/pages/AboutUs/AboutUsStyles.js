import styled from "styled-components";

export const AboutUsMainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;

    @media (max-width: 920px){
        flex-direction: column;
    }

`

export const AboutUsContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width:920px){
    flex-direction: column;
}


`

export const AboutUsTextContainer = styled.div`
 
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    color: #152039;
    margin: 0 1.5rem 0 1.5rem;
    h2{
        color: #152039;
    }
    p{
        font-weight: 600;
    }
    span{
        color: #4D77D8;
    }

    @media (max-width:420px){
    margin: 0 0.5rem 0 0.5rem;
}

`

export const AboutUsImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: auto;

img{
    width: 90%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 1.5rem;
}

@media (max-width:920px){
    width: 80%;
}

`