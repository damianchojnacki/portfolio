import type { ImageMetadata } from "astro";
import type { techs } from "../../utils/getTechIcon.ts";
import getTechIcon from "../../utils/getTechIcon.ts";
import { ExternalLink } from "lucide-preact";
import useOnScreen from "../../utils/useOnScreen.ts";
import { useMediaQuery } from "../../utils/useMediaQuery.ts";

export default function ProjectBlock({
    name,
    image,
    description,
    techs,
    liveUrl,
    githubUrl,
}: ProjectBlockProps) {
    const { ref, isVisible } = useOnScreen<HTMLDivElement>();
    const isDesktop = useMediaQuery("(min-width: 640px)");

    return (
        <div
            className={`sm:flex sm:w-5/6 lg:w-2/3 sm:aspect-[16/9] gap-10 sm:shadow-lg rounded-xl relative bg-cover transition ${(isVisible && isDesktop) ? "scale-105" : null}`}
            style={isDesktop ? { backgroundImage: `url('${image.src}')` } : {}}
            ref={ref}
        >
            {!isDesktop ? (
                <img src={image.src} alt={name} class="max-w-[93vw] mx-auto" />
            ) : null}

            <div className="flex flex-col justify-center gap-3 z-10 p-10 lg:p-20 sm:bg-opacity-75 sm:bg-black w-full transition duration-200 ease-in sm:opacity-0 hover:opacity-100 rounded-xl text-black dark:text-white sm:text-white">
                <h3 className="text-4xl tracking-tight font-bold flex items-center gap-2">
                    {name}

                    {liveUrl ? (
                        <a
                            href={liveUrl}
                            target="_blank"
                            className="block hover:scale-105 transition"
                            title="Live"
                            aria-label="Live"
                        >
                            <ExternalLink class="h-8 w-8 p-1 rounded" />
                        </a>
                    ) : null}

                    {githubUrl ? (
                        <a
                            href={githubUrl}
                            target="_blank"
                            className="block hover:scale-105 transition dark:fill-white sm:fill-white h-8 w-8 p-1 rounded"
                            title="Github repository"
                            aria-label="Github repository"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    ) : null}
                </h3>

                <p>{description}</p>

                <div className="flex gap-3">
                    {techs.map((tech) => {
                        const { html, color } = getTechIcon(tech);

                        return (
                            <div
                                dangerouslySetInnerHTML={{ __html: html }}
                                class="h-10 w-10"
                                style={{ fill: color }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export type ProjectBlockProps = {
    name: string;
    image: ImageMetadata;
    description: string;
    techs: (keyof typeof techs)[];
    liveUrl?: string;
    githubUrl?: string;
};
