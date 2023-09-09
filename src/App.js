import Header from "./Header";
import nft01 from "./assets/images/nft-01.png";
import nft02 from "./assets/images/nft-02.png";
import nft03 from "./assets/images/nft-03.png";
import './App.css';
import NFTs from "./NFTs";

const nfts = [
  {
    title: "Steady",
    image: nft01,
    description:
      "Steady stands as a digital masterpiece, embodying a sense of unwavering consistency and tranquility in its design.",
    amount: 0.041,
    timeLeft: 3,
    author: "Author 1",
  },
  {
    title: "Epic",
    image: nft02,
    description:
      "Epic, a digital marvel, transports you to a world of grandeur and adventure with its stunning visuals and captivating narrative.",
    amount: 0.045,
    timeLeft: 2,
    author: "Author 2",
  },
  {
    title: "Flame",
    image: nft03,
    description:
      "Flame, a fiery creation in the digital realm, ignites passion and intensity with its blazing colors and dynamic composition.",
    amount: 0.038,
    timeLeft: 4,
    author: "Author 3",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <NFTs nfts={nfts} />
    </div>
  );
}

export default App;
