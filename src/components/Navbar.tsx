import '../styles/global.css'

export default function Navbar() {
    return(
        <nav className='conatiner flex px-4 pb-8 mx-auto'>
            <a href="/" className='text-2xl font-bold mr-auto'>Ryan Furrer</a>
            <ul className="flex gap-4">
                <li><a href="/" className="underline">Home</a></li>
                <li><a href="/blog" className="underline">Blog</a></li>
                <li><a href="/about" className="underline">About</a></li>
            </ul>
        </nav>
    )
}