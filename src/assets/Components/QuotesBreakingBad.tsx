import { useEffect, useState } from "react";

interface QuoteData {
  author: string;
  quote: string;
}

const QuotesBreakingBad = () => {
  const [data, setData] = useState<QuoteData[] | null>(null); // Handles an array of quotes
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.breakingbadquotes.xyz/v1/quotes"
        );
        const jsonData: QuoteData[] = await response.json();
        // console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex justify-center items-center bg-[url('./assets/breaking_bad-16.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen box-border sm:box-content ">
      {data.map((quote, index) => (
        <div
          key={index}
          className="p-5 backdrop-blur-xl bg-black/30 border-b-4 rounded-lg hover:scale-105 transition duration-500 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <div className="font-mono flex flex-col items-center text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
              {quote.quote}
            </h1>
            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl py-2 text-amber-400">
              {quote.author}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesBreakingBad;
