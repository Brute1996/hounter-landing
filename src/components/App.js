import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import "./App.css";
import { OurRecomendationSection } from "./OurRecomendationSection/OurRecomendationSection";
import { ReadyToSellSection } from "./ReadyToSellSection/ReadyToSellSection";
import { OurReviewSection } from "./OurReviewSection/OurReviewSection";
import { ActicleSection } from "./ActicleSection/ActicleSection";
import { SubscribeSection } from "./SubscribeSection/SubscribeSection";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <HeroSection />
        <OurRecomendationSection />
        <ReadyToSellSection />
        <OurReviewSection />
        <ActicleSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
