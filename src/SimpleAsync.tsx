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
    <div className="flex relative justify-center items-center bg-[url('./assets/breaking_bad-16.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen">
      {data.map((quote, index) => (
        <div
          key={index}
          className=" box-border md:box-content absolute p-5 backdrop-blur-xl bg-black/30 
border-b-4 rounded-md hover:scale-75 transition duration-500 w-96 text-center  "
        >
          <div className="font-mono flex flex-col items-center text-pretty self-end ">
            <h1 className="text-3xl font-mono text-white ">{quote.quote}</h1>
            <h2 className="py-2 text-xl text-amber-400">{quote.author}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAsync;
