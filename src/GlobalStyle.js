import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --maxWidth:1280px;

    --white:#F5F3F5;
    --primery:#1B264F;
    --darker:#302B27;
    
    --secondery:#274690;
    --fontXl:2.5rem;
    --fontL:1.5rem;
    --fontMed:1.2rem;
    --fontSmall:1rem;
}

*{
    box-sizing:border-box;
    font-family:'Abel',sans-serif; 
    margin:0;
    padding:0;
}

body{
   


    h1{
        font-size:2rem;
        font-weight:600;
        color:var(--white);
    }

    h3{
        font-size:2rem;
        font-weight:600;
    }

    p{
        font-size:1rem;
        color:var(--white);
    }
}
`;
