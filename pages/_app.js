import emotionReset from 'emotion-reset';
import {css, Global} from '@emotion/react';

const App = ({Component, pageProps}) => (
  <>
    <Global styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}/>
    <Component {...pageProps} />
  </>
)

export default App
