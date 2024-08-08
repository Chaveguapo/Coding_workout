// interface AnimeData {
//   id: number;
//   anime: string;
//   character: string;
//   quote: string;
// }

const SimpleAsync = () => {
  return (
    <div>
      <div className="my-60 p-6 max-w-sm mx-auto bg-slate-800 rounded-xl shadow-lg flex flex-wrap md:flex-wrap-reverse items-center space-x-4">
        <div className="font-mono flex-shrink space-y-5">
          <h1 className=" text-3xl font-mono text-teal-100 text-clip overflow-hidden">
            “You've gotta dance like there's nobody watching, Love like you'll
            never be hurt, Sing like there's nobody listening, And live like
            it's heaven on earth.”
          </h1>
          <h2 className="text-2xl text-lime-200	">Character:</h2>
          <h2 className="text-2xl text-teal-600">Anime:</h2>
        </div>
      </div>
    </div>
  );
};

export default SimpleAsync;
