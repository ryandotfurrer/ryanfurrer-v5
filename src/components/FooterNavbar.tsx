import "../styles/global.css";

export default function FooterNavBar() {
  return (
    <nav className="container mx-auto flex justify-center px-4">
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
