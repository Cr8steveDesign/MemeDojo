// Homepage Component Housing the Home Screen App After Sign In
import HomeContent from "./components/HomeContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-slate-400 w-full h-full overflow-hidden">
        {/* Header Component */}
        <Header />

        {/* HomeScreen Content */}
        <HomeContent />

        {/* Footer Container Here */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
