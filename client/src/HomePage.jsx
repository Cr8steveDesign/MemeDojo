// Homepage Component Housing the Home Screen App After Sign In
import HomeContent from "./components/HomeContent";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-slate-400 w-full h-full overflow-hidden">
        {/* Header Component */}
        <MobileHeader />

        {/* HomeScreen Content */}
        <HomeContent />

        {/* Footer Container Here */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
