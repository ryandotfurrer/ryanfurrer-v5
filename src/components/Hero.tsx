import '../styles/global.css'

export default function Hero() {
    return(
        <section className='min-h-[65dvh] bg-zinc-100 dark:bg-zinc-800 '>
            <div className=" flex flex-col justify-center container px-4 mx-auto min-h-[65dvh]">
                <h1>Page Title</h1>
                <h3>Page Description</h3>
            </div>
        </section>
    )
}