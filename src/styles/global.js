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
        --black: #00000;
        --purple: #7481AA;
        --purplePink: #8674AA;
        --purpleDetails: #7481aa;   
        --pink: #DBA5F3;
        --background:  rgba(166, 184, 243, 0.2);
        --backgroundFooter: rgba(166, 184, 243, 0.3);
    }

      body{
        background: var(--background);
    }
    a{text-decoration: none}

    h1,h2,h3,h4,h5,h6{
        color: var(--purpleDetails);
        font-family: Montserrat;
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        text-align: left;
    }
    p{
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        text-align: left;

    }

    button{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        border: none;
    
        :focus {
            outline: none;
        }

    }
`;
