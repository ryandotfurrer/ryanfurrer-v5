import "../styles/global.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto grid h-3/4 grid-cols-1 lg:grid-cols-2 lg:place-items-center"
    >
      <div
        id="hero-img-container"
        className="container self-center lg:self-auto"
      >
        <img src="/favicon.svg" alt="logo" />
      </div>
      <div
        id="hero-text-container"
        className="align-end container self-end text-center lg:self-auto"
      >
        <h2>These are some words</h2>
        <h3 className="opacity-75">
          And these are some other words, can't you see?
        </h3>
      </div>
    </section>
  );
}
