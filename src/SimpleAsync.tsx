import { useEffect, useState } from "react";

interface QuoteData {
  author: string;
  quote: string;
}

const SimpleAsync = () => {
  const [data, setData] = useState<QuoteData[] | null>(null); // Handles an array of quotes
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.breakingbadquotes.xyz/v1/quotes"
        );
        const jsonData: QuoteData[] = await response.json();
        console.log(jsonData);
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
    <div className="flex justify-center items-center bg-gray-800 h-screen w-screen">
      <span className="absolute top-0 place-self-center bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
      {data.map((quote, index) => (
        <div
          key={index}
          className="relative p-5  bg-white dark:bg-gray-800 border-2 rounded-md hover:scale-75 transition duration-500 text-pretty	"
        >
          <div className="font-mono flex flex-col items-center">
            <h2 className="my-2 ml-3 text-2xl font-bold text-gray-800 dark:text-white">
              Breaking bad Quotes
            </h2>
            <h1 className="text-3xl font-mono text-teal-100 ">{quote.quote}</h1>
            <h2 className="text-2xl text-amber-400">
              Character: {quote.author}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAsync;
