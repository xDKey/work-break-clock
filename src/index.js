import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import Electrolize from './assets/Electrolize.ttf'
import AveriaBold from './assets/AveriaSerifLibre-Bold.ttf'
import App from './components/App'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Electrolize';
  src: url(${Electrolize});
};
@font-face {
  font-family: 'Averia';
  src: url(${AveriaBold});
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
