import { useState, useEffect } from "react";

function App() {
  // Use NASA DEMO_KEY by default
  const apiKey = "DEMO_KEY";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAPOD = async () => {
    setLoading(true);
    setError("");
    try {
      const randomDate = generateRandomDate();
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`,
      );
      if (!response.ok) {
        throw new Error("API error");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomDate = () => {
    const start = new Date(1995, 5, 16); // APOD started on June 16, 1995
    const end = new Date();
    const randomTime =
      start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toISOString().split("T")[0];
  };

  useEffect(() => {
    fetchAPOD();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="p-8 text-center bg-gray-900 border-b border-gray-700">
        <h1 className="text-5xl md:text-6xl font-light text-gray-50 tracking-tight">
          AstronLearn
        </h1>
        <p className="mt-3 text-sm font-light text-gray-400 tracking-wide">
          Discover the wonders of the universe
        </p>
      </header>

      {/* Error Message */}
      {error && (
        <div className="flex justify-center px-4 mt-6">
          <div className="bg-red-950 border border-red-800 text-red-200 px-6 py-4 max-w-md font-light">
            Error: {error}
          </div>
        </div>
      )}

      {/* Content Display */}
      {data && (
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Image/Video */}
          <div className="mb-8 border border-gray-700 p-2 bg-black">
            {data.media_type === "image" ? (
              <img src={data.url} alt={data.title} className="w-full block" />
            ) : (
              <iframe
                src={data.url}
                title={data.title}
                className="w-full aspect-video block"
                allowFullScreen
              />
            )}
          </div>

          {/* Title and Date */}
          <div className="mb-6 bg-gray-900 border border-gray-700 p-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-50 mb-3 tracking-tight">
              {data.title}
            </h2>
            <p className="text-gray-400 font-light text-sm">
              Captured on {data.date}
            </p>
          </div>

          {/* Description */}
          <div className="bg-gray-900 border border-gray-700 p-6">
            <p className="text-base leading-relaxed text-gray-300 font-light">
              {data.explanation}
            </p>
          </div>

          {/* New Random Button */}
          <div className="mt-8 text-center">
            <button
              onClick={fetchAPOD}
              disabled={loading}
              className="px-8 py-3 bg-gray-700 border border-gray-600 text-gray-100 font-light text-base hover:bg-gray-600 hover:border-gray-500 transition-colors disabled:opacity-50 disabled:bg-gray-800 disabled:border-gray-700"
            >
              {loading ? "Loading..." : "Discover Another"}
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
