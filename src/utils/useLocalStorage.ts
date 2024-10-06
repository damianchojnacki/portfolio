import { useEffect, useState } from "preact/hooks";

export default function useLocalStorage(
    key: string,
    defaultValue?: string | null,
): [string | undefined | null, (value: string) => void] {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const item = localStorage.getItem(key);

        if (!item) {
            localStorage.setItem(key, defaultValue?.toString() ?? "");
        }

        setValue(item ? item : defaultValue);

        function handler(e: StorageEvent) {
            if (e.key !== key) return;

            const lsi = localStorage.getItem(key);
            setValue(lsi ?? "");
        }

        window.addEventListener("storage", handler);

        return () => {
            window.removeEventListener("storage", handler);
        };
    }, []);

    const setValueWrap = (value: string) => {
        try {
            setValue(value);

            localStorage.setItem(key, value);
            if (typeof window !== "undefined") {
                window.dispatchEvent(new StorageEvent("storage", { key }));
            }
        } catch (e) {
            console.error(e);
        }
    };

    return [value, setValueWrap];
}
