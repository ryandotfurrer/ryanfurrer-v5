import "../styles/global.css";

export default function HeaderNavBar() {
  return (
    <nav className="max-w-8xl container mx-auto flex px-8 py-12 text-lg font-semibold">
      <a
        href="/"
        className="mr-auto text-3xl font-bold opacity-100 hover:text-emerald-300"
      >
        Ryan Furrer
      </a>
      <ul className="flex gap-4">
        <li>
          <a href="/" className="text-current/50">
            Home
          </a>
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
