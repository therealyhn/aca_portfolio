import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, offset = 120) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            let currentId = sectionIds[0];

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;

                const top = el.offsetTop;

                if (top <= scrollPosition) {
                    currentId = id;
                } else {
                    break;
                }
            }

            setActiveId(currentId);
        };

        handleScroll(); // inicijalno kad se učita stranica

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [sectionIds, offset]);

    return activeId;
}
