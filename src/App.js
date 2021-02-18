import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />

      <Navbar />

      <Header />

      <Aboutme />

      <Services />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
