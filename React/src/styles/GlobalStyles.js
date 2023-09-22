import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root{
    --blue-color: #152039;
    --lightblue-color: #4D77D8;
    --btn-gradient : linear-gradient( 83deg, #152039,#4D77D8  )

}

html{
    scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    background: #E8E8E8;
    font-family: "Montserrat" , sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a{
    text-decoration: none;
    color: #7D7D7D;
}

a:visited{
    color: #7d7d7d;
}

li{
    list-style: none;
}

`