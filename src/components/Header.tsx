import '../styles/global.css'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
    return(
        <header className='min-h-[75dvh]'>
            <Navbar />
            <Hero />
        </header>
    )
}