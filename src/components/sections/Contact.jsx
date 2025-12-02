export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 md:py-24 bg-background relative overflow-hidden"
        >

            <div className="max-w-6xl mx-auto px-4">
                {/* Naslov */}
                <div className="mb-14">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.6em] uppercase text-text-heading">
                        <span className="mr-4">Get In</span>
                        <span className="text-primary">Touch</span>
                    </h2>
                </div>

                {/* dva stuba – info + forma */}
                <div className="grid gap-12 md:grid-cols-2 md:items-start lg:items-center">
                    {/* LEVA STRANA – tekst + info lista */}
                    <div className="md:pr-6">
                        <p className="text-text-base mb-10 text-base md:text-[15px] leading-relaxed max-w-lg">
                            Please fill out the form on this section to contact with me. Or
                            call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
                        </p>

                        <ul className="space-y-5 text-base md:text-[15px]">
                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/location.svg"
                                    alt="location"
                                    className="mt-1 h-5 w-5"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[110px] inline-block">
                                        Address:
                                    </span>
                                    <span className="text-text-base">
                                        Brook 103, New York, USA
                                    </span>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/email.svg"
                                    alt="email"
                                    className="mt-1 h-5 w-5"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[110px] inline-block">
                                        Email:
                                    </span>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        example@gmail.com
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/phone.svg"
                                    alt="phone"
                                    className="mt-1 h-5 w-5"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[110px] inline-block">
                                        Phone:
                                    </span>
                                    <a
                                        href="tel:+770334425557"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        +77 033 442 55 57
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <img
                                    src="/img/svg/social/dribbble.svg"
                                    alt="website"
                                    className="mt-1 h-5 w-5"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[110px] inline-block">
                                        Website:
                                    </span>
                                    <a
                                        href="#"
                                        className="text-text-base inline-block hover:text-primary transition-colors"
                                    >
                                        www.myaddress.com
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* DESNA STRANA – forma kao u originalu */}
                    <div className="flex items-start">
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

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full h-11 md:h-12 rounded-md border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full h-11 md:h-12 rounded-md border border-border-subtle bg-white px-4 text-sm text-text-base outline-none transition-colors focus:border-primary"
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                                className="w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-sm text-text-base outline-none transition-colors resize-none focus:border-primary"
                            />

                            <button
                                type="submit"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white tracking-[0.18em] uppercase hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
