import useSiteSettings from "../../hooks/useSiteSettings";
import { urlFor } from "../../lib/sanityClient";

const fallbackSocials = [
    { label: "Instagram", url: "#", iconUrl: "/img/svg/social/instagram.svg" },
    { label: "Facebook", url: "#", iconUrl: "/img/svg/social/facebook.svg" },
    { label: "LinkedIn", url: "#", iconUrl: "/img/svg/social/linkedin.png" },
];

const fallbackSocialIcons = {
    instagram: "/img/svg/social/instagram.svg",
    facebook: "/img/svg/social/facebook.svg",
    linkedin: "/img/svg/social/linkedin.svg",
};

export default function Footer() {
    const { settings } = useSiteSettings();

    const footerLogo = settings?.footerLogo
        ? urlFor(settings.footerLogo).height(80).url()
        : "/img/logo/dark.png";

    const socials = settings?.socials?.length
        ? settings.socials.map((social) => {
            const label = social?.label || "Social";
            const normalizedLabel = label.toLowerCase().replace(/\s+/g, "");
            const fallbackIcon = fallbackSocialIcons[normalizedLabel];

            return {
                label,
                url: social?.url || "#",
                iconUrl: social?.icon
                    ? urlFor(social.icon).width(32).height(32).url()
                    : fallbackIcon || "/img/svg/social/instagram.svg",
            };
        })
        : fallbackSocials;

    return (
        <footer className="relative bg-background-dark text-white pt-24 pb-10">
            {/* Sadržaj footera */}
            <div className="relative z-20 max-w-6xl mx-auto px-4">
                {/* Gornji red */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
                    {/* Levo — Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={footerLogo}
                            alt="Logo"
                            className="h-10 brightness-0 invert"
                            loading="lazy"
                        />
                    </div>

                    {/* Centar — Social ikone */}
                    <div className="flex justify-center gap-6">
                        {socials.map((social) => {
                            const isExternal = Boolean(social.url && social.url !== "#");

                            return (
                                <a
                                    key={`${social.label}-${social.url}`}
                                    href={social.url}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noreferrer" : undefined}
                                    className="group rounded-full p-2 transition-transform transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary"
                                    style={{ transition: "box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)" }}
                                >
                                    <span className="relative inline-block">
                                        <img
                                            src={social.iconUrl}
                                            alt={social.label}
                                            className="
                                            h-5
                                            opacity-80
                                            group-hover:opacity-100
                                            brightness-0 invert
                                            transition
                                            duration-300
                                            ease-in-out
                                            group-hover:rotate-[20deg]
                                            group-hover:scale-110
                                            "
                                        />
                                        {/* animated ring on hover */}
                                        <span
                                            className="
                                            absolute
                                            -inset-2
                                            rounded-full
                                            pointer-events-none
                                            opacity-0
                                            group-hover:opacity-100
                                            group-hover:animate-[ping_1.2s_ease]
                                            border-2
                                            border-primary
                                            z-[-1]
                                        "
                                        ></span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Desno — Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-xs text-gray-400 tracking-wide whitespace-nowrap">
                            © {new Date().getFullYear()} AJCreative
                        </p>
                        <p className="text-xs text-gray-500 tracking-wide">
                            Sva prava zadržana.
                        </p>
                    </div>
                </div>

                {/* Linija */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Potpis */}
                <p className="text-center text-xs text-gray-500">
                    Dizajnirano &amp; razvijeno od strane{" "}
                    <a href="https://jovanljusic.com/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Jovan Ljušić</a>
                </p>
            </div>
        </footer>
    );
}
