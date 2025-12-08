import { useEffect, useState, useRef } from "react";
import "animate.css";

export default function Contact() {

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-20 md:py-32 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Naslov */}
                <div className={`mb-12 md:mb-20 text-center md:text-left ${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-[0.25em] md:tracking-[0.6em]
                     text-text-heading flex flex-col gap-2 sm:flex-row sm:gap-4 items-center sm:items-end justify-center md:justify-start">
                        <span>Zakažite</span>
                        <span className="text-primary">Projekat</span>
                    </h2>
                </div>

                {/* Info + forma */}
                <div className={`grid gap-10 md:grid-cols-2 md:items-center lg:items-center ${visible ? "animate__animated animate__fadeInUp animate__faster animate__slow" : "opacity-0"}`}>
                    {/* LEVA STRANA – tekst + info lista */}
                    <div className="md:pr-2 flex flex-col gap-">
                        <p className="text-text-base mb-10 text-base md:text-md leading-relaxed max-w-xl">
                            Molim vas popunite formular u ovom delu stranice kako biste me kontaktirali
                            ili pozovite između 9:00 i 20:00, od ponedeljka do petka.
                        </p>

                        <ul className="space-y-8 text-sm md:text-[15px]">
                            <li className="flex items-center gap-4 group cursor-pointer transition-all">
                                <span className="inline-flex items-center transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                    <img
                                        src="/img/svg/location.svg"
                                        alt="location"
                                        className="h-5 w-5"
                                        loading="lazy"
                                    />
                                </span>
                                <div className="flex items-center gap-10 min-h-[24px]">
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] group-hover:text-primary transition-colors duration-300">
                                        Adresa:
                                    </span>
                                    <span className="text-text-base group-hover:text-primary transition-colors duration-300">
                                        Kralja Petra 123, Požarevac
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-center gap-4 group cursor-pointer transition-all">
                                <span className="inline-flex items-center transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                    <img
                                        src="/img/svg/email.svg"
                                        alt="email"
                                        className="h-5 w-5"
                                        loading="lazy"
                                    />
                                </span>
                                <div className="flex items-center gap-10 min-h-[24px]">
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] group-hover:text-primary transition-colors duration-300">
                                        Email:
                                    </span>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-text-base hover:text-primary group-hover:text-primary transition-colors duration-300 relative"
                                    >
                                        <span className="relative z-10">kontakt@ajcreative.com</span>
                                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-4 group cursor-pointer transition-all">
                                <span className="inline-flex items-center transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                                    <img
                                        src="/img/svg/phone.svg"
                                        alt="phone"
                                        className="h-5 w-5"
                                        loading="lazy"
                                    />
                                </span>
                                <div className="flex items-center gap-10 min-h-[24px]">
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] group-hover:text-primary transition-colors duration-300">
                                        Telefon:
                                    </span>
                                    <a
                                        href="tel:+770334425557"
                                        className="text-text-base hover:text-primary group-hover:text-primary transition-colors duration-300 relative"
                                    >
                                        <span className="relative z-10">+381 061 123 456</span>
                                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-4 group cursor-pointer transition-all">
                                <span className="inline-flex items-center transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                    <img
                                        src="/img/svg/social/instagram.svg"
                                        alt="instagram"
                                        className="h-5 w-5"
                                        loading="lazy"
                                    />
                                </span>
                                <div className="flex items-center gap-10 min-h-[24px]">
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] group-hover:text-primary transition-colors duration-300">
                                        Instagram:
                                    </span>
                                    <a
                                        href="#"
                                        className="text-text-base hover:text-primary group-hover:text-primary transition-colors duration-300 relative"
                                    >
                                        <span className="relative z-10">@ajcreative</span>
                                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-primary to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* DESNA STRANA – forma */}
                    <div className="flex items-stretch">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="w-full space-y-4"
                        >
                            {/* WEB3FORMS ACCESS KEY */}
                            <input
                                type="hidden"
                                name="access_key"
                                value={import.meta.env.VITE_WEB3FORMS_KEY}
                            />

                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Ime i Prezime"
                                required
                                className="w-full h-11 md:h-12 rounded-sm border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full h-11 md:h-12 rounded-sm border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefon"
                                className="w-full h-11 md:h-12 rounded-sm border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Poruka"
                                required
                                className="w-full rounded-sm border border-border-subtle bg-white px-4 py-3 text-sm text-text-base outline-none transition-colors resize-none focus:border-primary"
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                className="mt-4 inline-flex w-full justify-center rounded-sm border border-primary bg-primary px-6 py-3 text-sm font-semibold
                                 text-white hover:text-primary tracking-[0.18em] uppercase hover:bg-white transition duration-300"
                            >
                                Pošalji Poruku
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
