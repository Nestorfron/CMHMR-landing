import React from "react";
import "../../styles/index.css";
import { Navbar } from "../component/navbar"
import { About } from "../component/about.jsx"
import { Skills } from "../component/skills.jsx"
import { Projects } from "../component/projects.jsx";
import { Contact } from "../component/contact.jsx";
import { Footer } from "../component/footer";

export const Home = () => (
    <div className="text-center">
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);