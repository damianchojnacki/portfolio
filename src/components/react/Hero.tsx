import Button from "./Button.tsx";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white">
            <div className="font-['Fira_Mono'] text-center tracking-wider sm:tracking-widest">
                <h1 className="text-4xl sm:text-5xl mb-4 text-left w-min sm:w-auto flex flex-wrap mx-auto gap-2 sm:gap-5">
                    <div>
                        &lt;<span className="text-rose-500">Damian</span>
                    </div>
                    <div>
                        <span className="text-lime-500">Chojnacki</span>/&gt;
                    </div>
                </h1>

                <p
                    className="text-xs sm:text-xl text-center flex flex-col items-start justify-center sm:flex-row gap-3"
                    id="subtitle"
                >
                    &#123;
                    <span class="ml-4 sm:ml-0">
                        "Full-stack Developer":{" "}
                        <span className="text-orange-500">true</span>
                    </span>
                    &#125;
                </p>
            </div>

            <div className="absolute bottom-0 mb-10 flex justify-center gap-3 text-white">
                <a href="#projects">
                    <Button>View my work</Button>
                </a>

                <a href="#contact">
                    <Button>Contact me</Button>
                </a>
            </div>
        </section>
    );
}
