import QuotesBreakingBad from "./QuotesBreakingBad.tsx";
import QuotesGot from "./QuotesGot.tsx";

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
