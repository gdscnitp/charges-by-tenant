import HomePageBanner from "./components/HomePageBanner";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Taskbar from "../profile/components/Taskbar";
import { Store } from '../../utility/Store';
import { useContext } from 'react';


function HomePage() {
  const { state, dispatch } = useContext(Store);
  return (
    <>
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
