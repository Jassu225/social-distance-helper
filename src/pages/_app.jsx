import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
