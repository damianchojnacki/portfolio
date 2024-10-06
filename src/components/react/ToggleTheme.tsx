import { useEffect } from "preact/hooks";
import { Moon, Sun } from "lucide-preact";
import useLocalStorage from "../../utils/useLocalStorage.ts";

export default function ToggleTheme() {
    const [theme, setTheme] = useLocalStorage("theme", null);

    useEffect(() => {
        const value = (() => {
            if (theme) {
                return theme;
            }

            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return "dark";
            }

            return "light";
        })();

        if (value === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-8 w-8 p-1 bg-white text-black rounded-full hover:scale-105 transition"
        >
            {theme === "light" ? (
                <Sun class="fill-yellow-500 text-yellow-500" />
            ) : (
                <Moon class="text-gray-800 fill-gray-800" />
            )}
        </button>
    );
}
