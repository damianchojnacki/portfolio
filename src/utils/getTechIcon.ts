import {
    siAstro,
    siBootstrap,
    siCss3,
    siDocker,
    siGit,
    siGithub,
    siGoogle,
    siHtml5,
    siInertia,
    siJavascript,
    siJenkins,
    siLaravel,
    siNextdotjs,
    siPhp,
    siPreact,
    siReact,
    siSass,
    siSocketdotio,
    siSymfony,
    siTailwindcss,
    siTypescript,
    siVuedotjs,
} from "simple-icons";

const techs = {
    php: siPhp,
    laravel: siLaravel,
    symfony: siSymfony,
    react: siReact,
    vue: siVuedotjs,
    preact: siPreact,
    html: siHtml5,
    css: siCss3,
    sass: siSass,
    docker: siDocker,
    next: siNextdotjs,
    javascript: siJavascript,
    typescript: siTypescript,
    astro: siAstro,
    google: siGoogle,
    socketio: siSocketdotio,
    tailwind: siTailwindcss,
    inertia: siInertia,
    bootstrap: siBootstrap,
    github: siGithub,
    git: siGit,
    jenkins: siJenkins,
};

export { techs };

export default function (name: keyof typeof techs, color?: string): any {
    const icon = techs[name];

    if (!icon) {
        return {};
    }

    return {
        html: icon.svg,
        color: color ?? `#${icon.hex}`,
    };
}
