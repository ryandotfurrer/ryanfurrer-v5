import '../styles/global.css'

export default function FooterNavBar() {
    return(
        <nav className='container flex px-4 mx-auto justify-center'>
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}