import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* Reset Css */
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        margin: 0;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Global styles */

    :root {
        --blue: #005985;
        --green: #9BFBB0;
        --pink: #FB9B9B;
        --red: #F52424;
        --font-color: #000000;
        --font-color-secondary: #FFFFFF;
        --background: #FFFFFF;

        --font-family: 'Recursive', sans-serif;
    }

    *{
        box-sizing: border-box;
        font-family: var(--font-family);
    }

    main{
        width: 100vw;
        height: calc(100vh - 86px);
        margin: 86px 0 80px;
    }

    a, a:after{
        color: var(--font-color);
        cursor: pointer;
    }

    button{
        cursor: pointer;
    }

    h2 {
        width: 100vw;
        height: 41px;
        background-color: var(--blue);
        padding: 9px 16px;
        line-height: 22px;
        font-size: 18px;
        color: var(--font-color-secondary);
        margin-bottom: 20px;
    }
`;
