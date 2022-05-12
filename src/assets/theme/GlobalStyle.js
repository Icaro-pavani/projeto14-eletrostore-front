import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */
    
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: var(--black);

      /* font-family: 'DM Sans', sans-serif;
      font-family: 'Montserrat', sans-serif; */
    }
    
    * {
        box-sizing: border-box;

        /* Color variables */
        --details-yellow: #FFC120;
        --dark-blue: #173C51;
        --black: #0C181F;
        --blue: #3296D4;
        --grey: #BABABA;
        --dark-grey: #7F7F7F;
        --disabled-background: #F5F5F5;
    }

    ::placeholder {
    color: #bababa;
  }
`;

export default GlobalStyle;
