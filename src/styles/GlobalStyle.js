import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
    }
    html { // 스크롤
        overflow-y: overlay;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: hsla(0, 0%, 50%, 0.5);
            border-radius: 100px;
        }
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #FFFFFF;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;