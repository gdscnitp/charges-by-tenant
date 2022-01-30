import Head from 'next/head'
import HomePageBanner from "./components/HomePageBanner";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Taskbar from "../profile/components/Taskbar";
import { Store } from "../../utility/Store";
import { useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function HomePage() {
  const { dispatch, state } = useContext(Store);
  const router = useRouter();

  console.log(state);

  if (Cookies.get("userInfo")) {
    router.push("/profile/tenant");
  }
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePageBanner />
      <div className="Parent">
        <Taskbar />
        <div className="S_right">
          <Features />
          <GetStarted />
        </div>
      </div>
    </>
  );
}

export default HomePage;
