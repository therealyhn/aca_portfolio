const skills = [
    { label: "Web Development", value: 95 },
    { label: "Brand Identity", value: 80 },
    { label: "Logo Design", value: 90 },
];

function ProgressBar({ label, value }) {
    return (
        <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-md font-medium text-black">
                <span>{label}</span>
                <span>{value}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-border-subtle/10 overflow-hidden">
                <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

export default function Progress() {
    return (
        <section className="bg-background py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">
                {/* Levi deo – tekst */}
                <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-heading">
                        Visok nivo veština u grafičkom dizajnu i fotografiji
                    </h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                        Kao grafički dizajner i profesionalni fotograf, godinama usavršavam
                        svoj rad na vizuelnim identitetima, kampanjama i fotografijama koje
                        pričaju jasnu priču o brendu. Kombinujem kreativnost, tehničko znanje
                        i posvećenost detaljima kako bih isporučio radove koji izgledaju
                        profesionalno i ostavljaju snažan utisak.
                    </p>
                </div>

                {/* Desni deo – progress barovi */}
                <div>
                    {skills.map((skill) => (
                        <ProgressBar
                            key={skill.label}
                            label={skill.label}
                            value={skill.value}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
