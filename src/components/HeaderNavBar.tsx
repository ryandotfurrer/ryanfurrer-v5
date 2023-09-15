import "../styles/global.css";

export default function HeaderNavBar() {
  return (
    <nav className="container mx-auto flex px-4 pb-8">
      <a href="/" className="mr-auto text-2xl font-bold">
        Ryan Furrer
      </a>
      <ul className="flex gap-4">
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
