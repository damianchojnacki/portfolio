import {
    siAstro,
    siBootstrap,
    siCss3,
    siDocker,
    siGoogle,
    siHtml5,
    siInertia,
    siJavascript,
    siLaravel,
    siNextdotjs,
    siPreact,
    siReact,
    siSass,
    siSocketdotio,
    siTailwindcss,
    siTypescript,
} from "simple-icons";

const techs = {
    laravel: siLaravel,
    react: siReact,
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
};

export { techs };

export default function (name: keyof typeof techs): any {
    const icon = techs[name];

    if (!icon) {
        return {};
    }

    return {
        html: icon.svg,
        color: `#${icon.hex}`,
    };
}
