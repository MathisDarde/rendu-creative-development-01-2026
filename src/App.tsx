import { Album } from "./_components/Album";
import { Citation } from "./_components/Citation";
import { Header } from "./_components/Header";
import { IntroSection } from "./_components/IntroSection";
import { Tracklist } from "./_components/Tracklist";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden pb-12 scroll-smooth">
      <div className="stars-container">
        <div className="star-layer stars-1"></div>
        <div className="star-layer stars-2"></div>
        <div className="star-layer stars-3"></div>
      </div>

      <Header />

      <div className="relative">
        <div id="menu" className="absolute top-0" />
        <IntroSection />
      </div>

      <div className="relative">
        <div id="album" className="absolute -top-24" />
        <Album />
      </div>

      <div className="relative">
        <div id="opinions" className="absolute -top-24" />
        <Citation />
      </div>

      <div className="relative">
        <div id="tracklist" className="absolute -top-24" />
        <Tracklist />
      </div>
    </div>
  );
}
