import "./styles/App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
        <div className="App">
          <Navbar heroRef={heroRef} aboutRef={aboutRef} skillsRef={skillsRef} />
          <main>
            <Hero heroRef={heroRef} aboutRef={aboutRef} skillsRef={skillsRef} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
