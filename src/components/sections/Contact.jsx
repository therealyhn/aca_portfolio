export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 md:py-32 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Naslov */}
                <div className="mb-12 md:mb-20 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-[0.25em] md:tracking-[0.6em]
                     text-text-heading flex flex-col gap-2 sm:flex-row sm:gap-4 items-center sm:items-end justify-center md:justify-start">
                        <span>Zakažite</span>
                        <span className="text-primary">Projekat</span>
                    </h2>
                </div>

                {/* Info + forma */}
                <div className="grid gap-10 md:grid-cols-2 md:items-center lg:items-center">
                    {/* LEVA STRANA – tekst + info lista */}
                    <div className="md:pr-2 flex flex-col gap-">
                        <p className="text-text-base mb-10 text-base md:text-md leading-relaxed max-w-xl">
                            Molim vas popunite formular u ovom delu stranice kako biste me kontaktirali
                            ili pozovite između 9:00 i 20:00, od ponedeljka do petka.
                        </p>

                        <ul className="space-y-6 text-sm md:text-[15px]">
                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/location.svg"
                                    alt="location"
                                    className="mt-1 h-5 w-5"
                                    loading="lazy"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[120px] inline-block">
                                        Adresa:
                                    </span>
                                    <span className="text-text-base">
                                        Kralja Petra 123, Požarevac
                                    </span>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/email.svg"
                                    alt="email"
                                    className="mt-1 h-5 w-5"
                                    loading="lazy"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[120px] inline-block">
                                        Email:
                                    </span>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        kontakt@ajcreative.com
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/phone.svg"
                                    alt="phone"
                                    className="mt-1 h-5 w-5"
                                    loading="lazy"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[120px] inline-block">
                                        Telefon:
                                    </span>
                                    <a
                                        href="tel:+770334425557"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        +381 061 123 456
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/social/instagram.svg"
                                    alt="instagram"
                                    className="mt-1 h-5 w-5"
                                    loading="lazy"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[120px] inline-block">
                                        Instagram:
                                    </span>
                                    <a
                                        href="#"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        @ajcreative
                                    </a>
                                </p>
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
                                className="w-full h-11 md:h-12 rounded-md border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full h-11 md:h-12 rounded-md border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Phone (novo polje) */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefon"
                                className="w-full h-11 md:h-12 rounded-md border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Poruka..."
                                required
                                className="w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-sm text-text-base outline-none transition-colors resize-none focus:border-primary"
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                className="mt-4 inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white tracking-[0.18em] uppercase hover:opacity-90 transition-opacity"
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
