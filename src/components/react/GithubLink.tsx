import getTechIcon from "../../utils/getTechIcon.ts";

export default function GithubLink() {
    return (
        <a
            href="https://github.com/damianchojnacki"
            target="_blank"
            className="w-8 h-8 block bg-white rounded-full p-1 hover:scale-105 transition pointer-events-auto opacity-50 hover:opacity-100"
        >
            <div
                dangerouslySetInnerHTML={{ __html: getTechIcon("github").html }}
            />
        </a>
    );
}
