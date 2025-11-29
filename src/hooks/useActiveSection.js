import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
    const [active, setActive] = useState(sectionIds[0]);

    useEffect(() => {
        const observers = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(id);
                        }
                    });
                },
                {
                    threshold: 0.5, // section visible 50%
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return active;
}
