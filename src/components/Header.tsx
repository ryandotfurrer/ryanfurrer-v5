import '../styles/global.css'

export default function Header() {
    return(
        <header>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="/" className="underline">Home</a></li>
                    <li><a href="/blog" className="underline">Blog</a></li>
                    <li><a href="/about" className="underline">About</a></li>
                </ul>
            </nav>
        </header>
    )
}