import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import StarCanvas from "./components/canvas/Stars";
//import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import { BrowserRouter } from "react-router-dom";
//import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Blogs from "./components/Blog/index.js";
import { AnimatePresence } from "framer-motion";
import Resume from "./components/Resume/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
        <SpeedInsights />
          <StarCanvas />
          <AnimatePresence>
            <div>
            
             <HeroSection /> 
              <Wrapper>
                <Skills />
                <Experience />
                <Blogs/>
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                
                <Education />
                <Contact />
              </Wrapper>
              <Footer />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;