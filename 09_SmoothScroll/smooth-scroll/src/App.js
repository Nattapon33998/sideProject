import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div id="home">
      <Navbar />
      <section className="home">
        <h1>home</h1>
      </section>
      <section className="about" id="about">
        <h1>about</h1>
      </section>
      <section className="projects" id="projects">
        <h1>projects</h1>
      </section>
      <section className="contact" id="contact">
        <h1>contact</h1>
      </section>
      <section className="rest"></section>
    </div>
  );
}

export default App;
