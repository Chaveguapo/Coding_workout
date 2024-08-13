import QuotesBreakingBad from "./QuotesBreakingBad";
import QuotesGOT from "./QuotesGot";

const ParallaxContainer = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-section">
        <QuotesBreakingBad />
      </div>
      <QuotesGOT />
    </div>
  );
};

export default ParallaxContainer;
