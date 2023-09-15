import "../styles/global.css";
import HeaderNavBar from "./HeaderNavBar";
import Hero from "./Hero";

export default function Header() {
  return (
    <header className="min-h-[100dvh]">
      <HeaderNavBar />
      <Hero />
    </header>
  );
}
