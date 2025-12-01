import Topbar from "./components/layout/Topbar";
import MobileMenu from "./components/layout/Mobile";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Progress from "./components/sections/Progress";
import Talk from "./components/sections/Talk";
// import News from "./components/sections/News";
// import Contact from "./components/sections/Contact";
// import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-base">
      {/* Top navigacija */}
      <Topbar />

      {/* Mobile meni */}
      <MobileMenu />

      {/* Sekcije */}
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Progress />
        <Talk />
        {/* <News /> */}
        {/* <Contact /> */}
      </main>

      {/* Footer / copyright */}
      {/* <Footer /> */}
    </div>
  );
}
