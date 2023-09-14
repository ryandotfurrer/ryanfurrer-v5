import '../styles/global.css'

export default function Header() {
    return(
        <header className='min-h-[75dvh]'>
            <nav className='conatiner flex px-4 pb-8 mx-auto'>
                <a href="/" className='text-2xl font-bold mr-auto'>Ryan Furrer</a>
                <ul className="flex gap-4">
                    <li><a href="/" className="underline">Home</a></li>
                    <li><a href="/blog" className="underline">Blog</a></li>
                    <li><a href="/about" className="underline">About</a></li>
                </ul>
            </nav>
            <section className='min-h-[75dvh] bg-zinc-100 dark:bg-zinc-800 '>
                <div className="container px-4 mx-auto">
                    <h1>Page Title</h1>
                    <h3>Page Description</h3>
                </div>
            </section>
        </header>
    )
}