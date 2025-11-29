export default function About() {
    return (
        <section id="about" className="py-20 bg-background-soft">
            <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
                {/* Slika */}
                <div className="relative">
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle shadow-lg shadow-primary/10">
                        <img
                            src="/img/about/1.jpg"
                            alt="About"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Tekst */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-text-muted mb-6 text-sm leading-relaxed">
                        Hello! I'm Alan Walker. I'm a web developer, and I'm very passionate
                        and dedicated to my work. With 20 years experience as a professional
                        web developer, I have acquired the skills and knowledge necessary to
                        make your project a success. I enjoy every step of the design
                        process, from discussion and collaboration.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
                        {[
                            "Web Development",
                            "Search Engine Optimization",
                            "Social Media Marketing",
                            "Content Generation",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/img/resume/resume.jpg"
                        download
                        className="inline-flex items-center rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-background transition-colors"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
