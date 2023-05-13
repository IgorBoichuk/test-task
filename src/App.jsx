import "./App.scss";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
