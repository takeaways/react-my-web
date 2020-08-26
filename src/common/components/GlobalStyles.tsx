import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
	    /* Color */
      --color-white: #ffffff;
      --color-light-white: #eeeeee;
      --color-dark-white: #bdbdbd;
      --color-pink: #fe918d;
      --color-dark-pink: #ff6863;
      --color-black: #4d4d4d;
      --color-dark-grey: #4d4d4d;
      --color-grey: #616161;
      --color-light-grey: #7c7979;
      --color-blue: #73aace;
      --color-yellow: #fff7d1;
      --color-orange: #feb546;
      --color-black: #000000;
      /* Font size */
      --font-large: 48px;
      --font-medium: 28px;
      --font-regular: 18px;
      --font-small: 16px;
      --font-micro: 14px;
      /* Font weight */
      --weight-bold: 700;
      --weight-semi-bold: 600;
      --weight-regular: 400;
      /* Size */
      --size-border-radius: 4px;
      /* Animation */
      --animation-duration: 250ms;
    }
    *{
        box-sizing:border-box;
    }
    body{
        /* position: absolute;
      height: 100%; */
        font-size:var(--font-micro);
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyles;
