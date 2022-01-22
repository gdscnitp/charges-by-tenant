import { Store } from "../../../utility/Store";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext } from "react";

const LogOut = (props) => {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  function logOut() {
    try {
      dispatch({ type: "USER_LOGOUT" });
      enqueueSnackbar("Logged Out Successfully", { variant: "success" });
      router.push("/homepage/HomePage");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  }
  return (
    <div onClick={logOut}>
      <i className={props.classprop}></i>
    </div>
  );
};

export default LogOut;
