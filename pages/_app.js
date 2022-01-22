import "../styles/globals.css";
import "../styles/Profile.css";
import "../styles/Landing.css"
import "../styles/differentCharges.css";
import { SnackbarProvider } from 'notistack';
import { StoreProvider } from '../utility/Store';



import "../styles/Transaction.css"
import "../styles/p_auth.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        {/* <PayPalScriptProvider deferLoading={true}> */}
          <Component {...pageProps} />
        {/* </PayPalScriptProvider> */}
      </StoreProvider>
    </SnackbarProvider>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   const areLogsEnabled = ctx?.router?.query?.debug || "";
//   global.areLogsEnabled = areLogsEnabled === "true";
//   return {};
// };

export default MyApp;
