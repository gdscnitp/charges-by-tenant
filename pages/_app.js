import '../styles/globals.css'
import logger from '../helpers/logger';

function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx) => {
  
  const areLogsEnabled = ctx?.router?.query?.debug || '';
	    global.areLogsEnabled = areLogsEnabled === 'true';
  return {};
}

export default MyApp
