import "../styles/global.css";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[65dvh]">
      <div className="container mx-auto flex min-h-[65dvh] flex-col justify-center px-4">
        <h1>Page Title</h1>
        <h3 className="opacity-75">Page Description</h3>
      </div>
    </section>
  );
}
