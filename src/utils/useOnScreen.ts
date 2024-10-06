import { useEffect, useRef, useState } from "preact/hooks";

const useOnScreen = <T extends HTMLElement>(
    options?: IntersectionObserverInit,
) => {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.5, ...options },
        );

        if (ref.current) {
            observer.observe(ref.current as Element);
        }

        return () => {
            if (!ref.current) {
                return;
            }

            observer.unobserve(ref.current as Element);
        };
    }, [options, ref]);

    return { ref, isVisible };
};

export default useOnScreen;
