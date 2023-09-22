import styled from "styled-components";

export const RecommendedContainer = styled.section`
margin: 2rem 0 2rem 0;
display: flex;
justify-content: center;
align-items: center;
max-width: 1200px;
flex-direction: column;


h2{
    color: #152039;
    
    font-size: 3rem;
}

@media (max-width: 500px){
    h2{
         font-size: 1.8rem;
        margin-bottom: 1rem;
    }
       
    }
`


export const CardsContainerStyled = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 1rem;
    margin: 3rem 0 3rem 0;
`

export const CardRecommended = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0 1rem 0;
flex-direction: column;
width: 280px;
height: auto;
background-color: white;
box-shadow: 5px 5px 15px gray;
border-radius: 15px;
border: solid 1px #152039;
margin: 0 1rem 0 1.5rem;

img{
    width: 90%;
    border: solid 1px #152039;
    border-radius: 3px;

}

h3{
    font-size: 1.4rem;
    font-weight: 800;
    color: #152039;
}

span{
    color: #4D77D8;
    font-weight: 600;
    margin-bottom: 20px;
}
`
    



