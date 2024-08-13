import QuotesBreakingBad from "./QuotesBreakingBad";
import QuotesGot from "./QuotesGot";
import "index.css";

const ParallaxContainer = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-section">
        <QuotesBreakingBad />
      </div>
      <QuotesGot />
    </div>
  );
};

export default ParallaxContainer;
