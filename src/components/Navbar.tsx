import '../styles/global.css'

export default function Navbar() {
    return(
        <nav className='container flex px-4 pb-8 mx-auto'>
            <a href="/" className='text-2xl font-bold mr-auto'>Ryan Furrer</a>
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}