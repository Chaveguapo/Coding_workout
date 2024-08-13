import { useEffect, useState } from "react";
interface House {
  name: string;
}

interface Character {
  name: string;
  house: House;
}

interface QuoteData {
  sentence: string;
  character: Character;
}
const QuotesGot = () => {
  const [data, setData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/random"
        );
        const jsonData: QuoteData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Failed to fetch data from GOT API", error);
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
    <div className="flex justify-center items-center bg-[url('./assets/Got.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen box-border sm:box-content">
      <div className="p-5 backdrop-blur-xl bg-black/30 border-b-4 rounded-lg hover:scale-105 transition duration-500 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="font-mono flex flex-col items-center text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            {data.sentence}
          </h1>
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl py-2 text-amber-400">
            {data.character.name}
          </h2>
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-400">
            House: {data.character.house.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuotesGot;
