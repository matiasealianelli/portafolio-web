import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyects from "./components/Proyects";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="contSections">
        <Proyects />
      </div>
    </>
  );
}

export default App;
