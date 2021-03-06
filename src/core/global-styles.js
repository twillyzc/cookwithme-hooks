import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  min-height: 100vh;
  color: rgba(31, 32, 65, 0.75);
}

a,
a:link,
a:hover {
  color: inherit;
  text-decoration: none;
}`;
