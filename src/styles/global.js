import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .line{
        display: inline-block;
        width: 100px;
        height: 2px;
        background-color: var(--text-primary);
    }
    body{
        background-color: var(--bg-primary);
        color: var(--text-primary);
        font-family: var(--t-p);
        overflow-x: hidden;
    }
    
    :root{
        --bg-primary:#212121;
        --bg-secondary:#111;
        --text-primary:#fff;
        --text-primary-grey:#ddd;
        --text-secondary:#6EFF63;
        --green-color:#6EFF63;

        --t-p:'Manrope', sans-serif;
        --t-s:'Roboto Mono', monospace;
        --max-c-w:1200px;
        
        --glow-color: rgb(217, 176, 255);
        --glow-spread-color: rgba(127, 255, 123, 0.781);
        --enhanced-glow-color: rgb(212, 255, 206);
        --btn-color: #1fff676e;
        --btn-color-text: rgb(36, 166, 13);
        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
    
   
    
`;
