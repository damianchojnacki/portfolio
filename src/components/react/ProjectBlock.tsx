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
            className={`sm:flex sm:w-5/6 lg:w-2/3 sm:aspect-[16/9] gap-10 sm:shadow-lg rounded-xl relative bg-cover transition ${isVisible && isDesktop ? "scale-105" : null}`}
            style={isDesktop ? { backgroundImage: `url('${image.src}')` } : {}}
            ref={ref}
        >
            {!isDesktop ? (
                <img
                    src={image.src}
                    alt={name}
                    class="max-w-full px-6 mx-auto"
                />
            ) : null}

            <div className="flex flex-col justify-center gap-3 z-10 p-6 lg:p-20 sm:bg-opacity-75 sm:bg-black w-full transition duration-200 ease-in sm:opacity-0 hover:opacity-100 rounded-xl text-black dark:text-white sm:text-white">
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
                            <ExternalLink class="h-6 w-6" />
                        </a>
                    ) : null}

                    {githubUrl ? (
                        <a
                            href={githubUrl}
                            target="_blank"
                            className="block hover:scale-105 transition"
                            title="Github repository"
                            aria-label="Github repository"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: getTechIcon("github").html,
                                }}
                                className="h-6 w-6 dark:fill-white sm:fill-white"
                            />
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
