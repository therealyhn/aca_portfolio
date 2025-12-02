export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 md:py-24 bg-background relative"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Naslov */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                </div>

                <div className="grid gap-10 md:grid-cols-2 pt-6">
                    {/* LEVA STRANA – tekst + info lista */}
                    <div>
                        <p className="text-text-base mb-8 text-sm leading-relaxed">
                            Please fill out the form on this section to contact with me.
                            Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
                        </p>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <img
                                    src="/img/svg/location.svg"
                                    alt=""
                                    className="mt-1 h-4 w-4 text-text-heading"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] inline-block">
                                        Address:
                                    </span>
                                    <span className="text-text-base">
                                        Brook 103, New York, USA
                                    </span>
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <img
                                    src="/img/svg/email.svg"
                                    alt=""
                                    className="mt-1 h-4 w-4 text-text-heading"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] inline-block">
                                        Email:
                                    </span>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-text-base relative inline-block hover:text-text-heading transition-colors"
                                    >
                                        example@gmail.com
                                        <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-current scale-x-0 origin-right transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <img
                                    src="/img/svg/phone.svg"
                                    alt=""
                                    className="mt-1 h-4 w-4 text-text-heading"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] inline-block">
                                        Phone:
                                    </span>
                                    <a
                                        href="tel:+770334425557"
                                        className="text-text-base relative inline-block hover:text-text-heading transition-colors"
                                    >
                                        +77 033 442 55 57
                                    </a>
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <img
                                    src="/img/svg/social/dribbble.svg"
                                    alt=""
                                    className="mt-1 h-4 w-4 text-text-heading"
                                />
                                <p>
                                    <span className="font-semibold font-[Poppins] text-text-heading min-w-[90px] inline-block">
                                        Website:
                                    </span>
                                    <a
                                        href="#"
                                        className="text-text-base relative inline-block hover:text-text-heading transition-colors"
                                    >
                                        www.myaddress.com
                                    </a>
                                </p>
                            </li>

                            {/* Dodaj/menjaj mreže po potrebi */}
                        </ul>
                    </div>

                    {/* DESNA STRANA – forma (spremna za Web3Forms) */}
                    <div>
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="space-y-4"
                        >
                            {/* !!! OVDE UBACIŠ SVOJ WEB3FORMS ACCESS KEY !!! */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="YOUR_WEB3FORMS_ACCESS_KEY"
                            />

                            {/* (Opcija) subject / odakle poruka dolazi */}
                            <input
                                type="hidden"
                                name="subject"
                                value="New message from portfolio contact form"
                            />

                            {/* Ime + Email */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full rounded-md border border-border-subtle bg-white px-3 py-2 text-sm text-text-base outline-none focus:border-text-heading transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full rounded-md border border-border-subtle bg-white px-3 py-2 text-sm text-text-base outline-none focus:border-text-heading transition-colors"
                                />
                            </div>

                            {/* Poruka */}
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                                className="w-full rounded-md border border-border-subtle bg-white px-3 py-2 text-sm text-text-base outline-none focus:border-text-heading transition-colors resize-none"
                            />

                            {/* Dugme */}
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md border-2 border-primary bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-transparent hover:text-text-heading transition-colors"
                            >
                                Send Message
                            </button>

                            {/* Info / poruke (možeš ih kasnije povezati sa custom JS logikom) */}
                            <p className="mt-2 text-xs text-text-base/70">
                                All fields are required. By submitting, you agree that we may
                                contact you back regarding your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
