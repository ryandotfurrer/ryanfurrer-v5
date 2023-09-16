import "../styles/global.css";
import FooterNavBar from "./FooterNavbar";

export default function Footer() {
  return (
    <footer className="h-min-full mx-auto w-full border-t-2 border-zinc-200 border-opacity-100 pb-8 pt-20 dark:border-zinc-800">
      <div
        id="footer-inside-container"
        className="container mx-auto grid gap-4 px-8"
      >
        <FooterNavBar />
        <div id="copyright" className="text-sm opacity-75">
          <p>&copy; 2023 Ryan Furrer</p>
        </div>
      </div>
    </footer>
  );
}
