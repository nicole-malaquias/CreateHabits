import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        list-style: none;
        
    }

  

    :root{
        --white: #F5F5F5;
        --black: #000000;
        --purple: #7481AA;
        --purplePink: #8674AA;
        --purpleDetails: #7481aa;   
        --pink: #DBA5F3;
        --background:  rgba(166, 184, 243, 0.2);
        --backgroundFooter: rgba(166, 184, 243, 0.3);
    }

      body{
        background: var(--background);
        height: 100vh;
    }
    a{text-decoration: none}

    h1,h2,h3,h4,h5,h6{
        color: var(--purpleDetails);
        font-family: Montserrat;
        font-size:1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        text-align: left;
    }
    
    @media only screen and (min-width: 768px){
        h1,h2,h3,h4,h5,h6{
            font-size:3rem;
        }
    }

    h4 {
        font-size: 1.5rem;
        color: var(--pink);
    }
    input {
        outline: none;
        border: none;
    }
    p{
        font-family: Montserrat;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        text-align: left;
    }

    button{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
<<<<<<< HEAD
        border: none;
    
        :focus {
            outline: none;
        }

        cursor: pointer;
=======
        cursor: pointer;    
>>>>>>> 808a0f3ec9cea8905ad43b83a9998278fa037cca
    }
`;
