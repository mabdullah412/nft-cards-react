import NFTCard from "./NFTCard";
import "./NFTs.css";

function NFTs({ nfts }) {
  return (
    <div className="nfts">
      <NFTCard
        title={nfts[0].title}
        description={nfts[0].description}
        image={nfts[0].image}
        timeLeft={nfts[0].timeLeft}
        amount={nfts[0].amount}
        author={nfts[0].author}
      />
      <NFTCard
        title={nfts[1].title}
        description={nfts[1].description}
        image={nfts[1].image}
        timeLeft={nfts[1].timeLeft}
        amount={nfts[1].amount}
        author={nfts[1].author}
      />
      <NFTCard
        title={nfts[2].title}
        description={nfts[2].description}
        image={nfts[2].image}
        timeLeft={nfts[2].timeLeft}
        amount={nfts[2].amount}
        author={nfts[2].author}
      />
    </div>
  );
}

export default NFTs;
