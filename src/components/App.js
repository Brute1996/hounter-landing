import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import "./App.css";
import { OurRecomendationSection } from "./OurRecomendationSection/OurRecomendationSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <HeroSection />
        <OurRecomendationSection />
      </main>
    </div>
  );
}

export default App;
