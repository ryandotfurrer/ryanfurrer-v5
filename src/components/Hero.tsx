import "../styles/global.css";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-h-[100dvh] min-h-[75vh]">
      <div className="container mx-auto grid max-h-[100dvh] min-h-[75dvh] grid-cols-1 justify-around px-8 lg:grid-cols-2 lg:place-items-center">
        <div id="hero-img-container" className="w-full">
          <img src="/favicon.svg" alt="logo" />
        </div>
        <div id="hero-text-container" className="grid place-content-start">
          <h2>These are some words</h2>
          <h3 className="opacity-75">
            And these are some other words, can't you see?
          </h3>
        </div>
      </div>
    </section>
  );
}
