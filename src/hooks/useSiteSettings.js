import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";

const query = `*[_type == "siteSettings"][0]{
    navLogoLight,
    navLogoDark,
    footerLogo,
    socials[]{
        label,
        url,
        icon
    }
}`;

let cachedSettings = null;
let cachedPromise = null;

export default function useSiteSettings() {
    const [settings, setSettings] = useState(cachedSettings);
    const [loading, setLoading] = useState(!cachedSettings);

    useEffect(() => {
        let isMounted = true;

        if (cachedSettings) {
            setLoading(false);
            return () => {
                isMounted = false;
            };
        }

        if (!cachedPromise) {
            cachedPromise = sanityClient.fetch(query);
        }

        cachedPromise
            .then((data) => {
                cachedSettings = data;
                if (isMounted) {
                    setSettings(data);
                }
            })
            .catch((err) => {
                cachedPromise = null;
                console.error("Site settings fetch error:", err);
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return { settings, loading };
}
