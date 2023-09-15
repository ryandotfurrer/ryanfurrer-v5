import "../styles/global.css";

export default function Hero() {
  return (
    <section className="min-h-[65dvh] bg-zinc-100 dark:bg-zinc-800 ">
      <div className=" container mx-auto flex min-h-[65dvh] flex-col justify-center px-4">
        <h1>Page Title</h1>
        <h3>Page Description</h3>
      </div>
    </section>
  );
}
