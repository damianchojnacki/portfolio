import { Briefcase, Code2, Handshake } from "lucide-preact";
import type { LucideIcon } from "lucide-preact";

type Highlight = {
    icon: LucideIcon;
    accent: string;
    title: string;
    subtitle: string;
};

const highlights: Highlight[] = [
    {
        icon: Briefcase,
        accent: "bg-fuchsia-500/10 text-fuchsia-500",
        title: "8 years",
        subtitle: "of commercial experience",
    },
    {
        icon: Code2,
        accent: "bg-sky-500/10 text-sky-500",
        title: "SOLID code",
        subtitle: "production-ready & maintainable",
    },
    {
        icon: Handshake,
        accent: "bg-green-500/10 text-green-500",
        title: "Long-term partner",
        subtitle: "stays involved",
    },
];

export default function About() {
    return (
        <section id="about" class="bg-gray-100 dark:bg-gray-900">
            <div class="py-20 px-6 mx-auto max-w-screen-md">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    About me
                </h2>

                <p class="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    I'm a full-stack web developer who builds reliable web
                    applications.
                </p>

                <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    I work with <strong>PHP</strong> (<strong>Laravel</strong> /{" "}
                    <strong>Symfony</strong>) on the backend and{" "}
                    <strong>JavaScript / TypeScript</strong> with{" "}
                    <strong>React</strong> and <strong>Vue</strong> on the
                    frontend. I've built everything from company websites to
                    complex applications — contenerized, covered by automated tests,
                    documented, and shipped through CI/CD pipelines.
                </p>

                <p class="mb-12 text-center text-lg font-medium text-gray-900 dark:text-white">
                    Open to contract and full-time roles with companies, and to
                    building web apps for businesses.
                </p>

                <div class="grid gap-5 sm:grid-cols-3">
                    {highlights.map(
                        ({ icon: Icon, accent, title, subtitle }) => (
                            <div
                                key={title}
                                class="group flex flex-col items-center rounded-2xl bg-white dark:bg-gray-800 p-7 text-center shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-700 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div
                                    class={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:scale-110 ${accent}`}
                                >
                                    <Icon class="h-7 w-7" />
                                </div>

                                <div class="text-xl font-bold text-gray-900 dark:text-white">
                                    {title}
                                </div>

                                <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {subtitle}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
