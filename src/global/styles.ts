import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body{
  font-family: sans-serif;
  color: white;
}
body{
  background-color: #121214;
}
ul{
  list-style: none;
}
`