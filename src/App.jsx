import "./App.scss";
import FindMore from "./components/fin-more/FindMore";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Recommendation from "./components/recommendation/recommendation";
import Review from "./components/review/review";
import Sell from "./components/sell/sell";
import Subscribe from "./components/subscribe/subscribe";

function App() {
  return (
    <div className="background">
      <div className="App">
        <div className="container">
          <Navbar />
          <Hero />
          <Recommendation />
          <Sell />
          <Review />
          <FindMore />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
