import '../styles/global.css'
import FooterNavBar from './FooterNavbar'

export default function Footer() {
    return(
      <div id='footer-container' className="bg-gray-500 container mx-auto">
        <footer className=''>
            <FooterNavBar />
        </footer>
      </div>
    )
}