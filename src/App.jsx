import { useCallback, useEffect, useState } from "react";
import "./App.css";

const APOD_START_DATE = new Date("1995-06-16T00:00:00Z");

function generateRandomDate() {
  const end = new Date();
  const randomTime =
    APOD_START_DATE.getTime() +
    Math.random() * (end.getTime() - APOD_START_DATE.getTime());
  return new Date(randomTime).toISOString().split("T")[0];
}

function App() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAPOD = useCallback(async () => {
    if (!apiKey) {
      setError(
        "Missing NASA API key. Set VITE_NASA_API_KEY in your environment.",
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const randomDate = generateRandomDate();
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`,
      );

      if (!response.ok) {
        throw new Error("Unable to fetch celestial data right now.");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  useEffect(() => {
    fetchAPOD();
  }, [fetchAPOD]);

  return (
    <div className="app-shell min-h-screen text-[#e5e1e7]">
      <div className="app-bg-layer" aria-hidden="true" />

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#131317]/40 backdrop-blur-2xl shadow-[0_0_64px_rgba(173,198,255,0.06)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-2xl font-black uppercase tracking-tight text-[#e5e1e7]">
              AstronLearn
            </span>
          </div>

          

          
        </nav>
      </header>

      {error && (
        <div className="mx-auto mt-6 max-w-6xl px-6 md:px-10">
          <div className="rounded-lg border border-[#93000a] bg-[#2b1116]/90 px-5 py-4 text-[#ffdad6]">
            Error: {error}
          </div>
        </div>
      )}

      {data && (
        <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pt-36">
          <div className="glass-panel celestial-glow overflow-hidden rounded-xl p-2 transition-all duration-700">
            {data.media_type === "image" ? (
              <img
                src={data.url}
                alt={data.title}
                className="aspect-21/9 w-full rounded-lg object-cover"
                loading="lazy"
              />
            ) : (
              <iframe
                src={data.url}
                title={data.title}
                className="aspect-21/9 w-full rounded-lg"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <section className="lg:col-span-4">
              <div className="glass-panel rounded-xl p-7">
                <p className="mb-3 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.25em] text-[#e0b6ff]">
                  Entry Type: NASA APOD
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-['Space_Grotesk'] text-[#e5e1e7]">
                  {data.title}
                </h2>
                <p className="mt-4 text-sm font-light text-[#c9c5cd]">
                  Captured: {data.date}
                </p>
              </div>
            </section>

            <section className="lg:col-span-8">
              <h3 className="mb-4 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.28em] text-[#adc6ff]">
                Scientific Explanation
              </h3>
              <div className="glass-panel rounded-xl p-7">
                <p className="text-base md:text-lg leading-relaxed font-light text-[#c9c5cd]">
                  {data.explanation}
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={fetchAPOD}
              disabled={loading}
              className="hero-gradient rounded-full px-10 py-3 font-['Space_Grotesk'] text-xs font-black uppercase tracking-[0.2em] text-[#002e69] transition-transform duration-200 hover:scale-[0.98] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
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
