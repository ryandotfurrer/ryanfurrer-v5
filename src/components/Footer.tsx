import "../styles/global.css";
import FooterNavBar from "./FooterNavbar";

export default function Footer() {
  return (
    <div id="footer-container" className="container mx-auto bg-gray-500">
      <footer className="">
        <FooterNavBar />
      </footer>
    </div>
  );
}
