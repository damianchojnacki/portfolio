import Button from "./Button.tsx";
import getTechIcon from "../../utils/getTechIcon.ts";

export default function Hero() {
    const skills = [
        { name: "PHP", icon: getTechIcon("php") },
        { name: "Laravel", icon: getTechIcon("laravel") },
        { name: "Symfony", icon: getTechIcon("symfony", "white") },
        { name: "JavaScript", icon: getTechIcon("javascript") },
        { name: "TypeScript", icon: getTechIcon("typescript") },
        { name: "React", icon: getTechIcon("react") },
        { name: "Next.js", icon: getTechIcon("next", "white") },
        { name: "Vue", icon: getTechIcon("vue") },
        { name: "TailwindCSS", icon: getTechIcon("tailwind") },
        { name: "Git", icon: getTechIcon("git") },
        { name: "Docker", icon: getTechIcon("docker") },
        { name: "Jenkins", icon: getTechIcon("jenkins") },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white">
            <div className="font-['Fira_Mono'] text-center tracking-wider sm:tracking-widest mb-10 md:mb-28 pt-10 md:pt-28">
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

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-4 sm:gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center"
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: skill.icon.html,
                            }}
                            class="h-6 w-6 md:h-10 md:w-10"
                            style={{ fill: skill.icon.color }}
                        />

                        <span className="mt-1 md:mt-2 text-white font-medium text-xs md:text-sm lg:text-base">
                            {skill.name}
                        </span>
                    </div>
                ))}
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
