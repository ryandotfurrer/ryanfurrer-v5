import "../styles/global.css";

export default function FooterNavBar() {
  return (
    <nav className="container mx-auto">
      <ul className="grid">
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
