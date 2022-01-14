import HomePageBanner from "./components/HomePageBanner";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Taskbar from "../profile/components/Taskbar";

function HomePage() {
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
