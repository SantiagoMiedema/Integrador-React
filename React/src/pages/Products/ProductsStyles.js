import styled from "styled-components";
import Boton from "../../components/UI/Boton/Boton";


export const ProductsContainerStyled = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2{
        font-size: 2.6rem;
        color: #152039;
    }

    h3{
        font-size: 2rem;
        color: #152039;
    }

    @media (max-width: 500px){
        h2{
            font-size: 2rem;
            padding: 0 2rem 0 2rem;
        }
        h3{
            font-size: 1.6rem;
        }
    }
`
export const CategoriesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

export const CategoriesCardStyled = styled(Boton)`
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

export const Card = styled.div`
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
    max-width: 90%;
    
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



