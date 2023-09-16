import "../styles/global.css";

export default function HeaderNavBar() {
  return (
    <nav id="header-nav">
      <h1 className="mr-auto text-3xl opacity-100 hover:text-emerald-300 md:text-4xl  ">
        <a href="/" className="hover:no-underline">
          Ryan Furrer
        </a>
      </h1>
      <ul className="flex gap-[1em]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
