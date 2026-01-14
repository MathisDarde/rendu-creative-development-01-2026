import { Album } from "./_components/Album";
import { Header } from "./_components/Header";
import { Tracklist } from "./_components/Tracklist";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden py-24 scroll-smooth">
      <div className="stars-container">
        <div className="star-layer stars-1"></div>
        <div className="star-layer stars-2"></div>
        <div className="star-layer stars-3"></div>
      </div>

      <Header />

      <div className="relative">
        <div id="album" className="absolute -top-40" />
        <Album />
      </div>

      <div className="relative">
        <div id="tracklist" className="absolute -top-32" />
        <Tracklist />
      </div>
    </div>
  );
}
