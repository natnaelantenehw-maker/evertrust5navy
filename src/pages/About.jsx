import { Link } from "react-router-dom"
import { Phone, MapPin, Clock3, CheckCircle2 } from "lucide-react"

export default function About() {
    const points = [
        "Compassionate, dependable caregivers",
        "Personalized care plans for every client",
        "Flexible support based on changing needs",
        "A strong commitment to dignity, comfort, and trust",
    ]

    return (
        <div className="min-h-screen bg-[#f7f8f5]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
            <div className="bg-[#17345d] text-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 font-sans text-sm md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
                    <div className="flex flex-wrap items-center gap-5 text-white/90">
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call Us: (703) 555-0118</div>
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Serving Northern Virginia</div>
                        <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> Available 24/7</div>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 z-30 border-b border-[#e9ece5] bg-[#f8f7f3]/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
                    <div className="flex items-center gap-3">
                        <img src="/evertrustlogo.png" alt="EverTrust Icon" className="h-20 w-auto" />
                        <div>
                            <div className="text-3xl text-[#17345D] md:text-4xl">EverTrust</div>
                            <div className="font-sans text-xs uppercase tracking-[0.35em] text-[#C8A24F]">
                                Homecare Services
                            </div>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-8 font-sans text-[15px] text-[#394353] lg:flex">
                        <Link to="/" className="transition hover:text-[#1b2b4a]">Home</Link>
                        <Link to="/services" className="transition hover:text-[#1b2b4a]">Services</Link>
                        <Link to="/about" className="transition hover:text-[#1b2b4a]">About</Link>
                    </nav>
                </div>
            </header>

            <section className="bg-[#f8f7f3] px-6 py-20 md:px-10 lg:px-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <div className="font-sans text-sm uppercase tracking-[0.35em] text-[#6e9c63]">About Us</div>
                        <h1 className="mt-4 text-[38px] text-[#1b2b4a] md:text-[62px]">A Home Care Team Families Can Trust</h1>
                        <p className="mt-6 font-sans text-[18px] leading-8 text-[#5f6772]">
                            EverTrust Homecare Services was created to provide compassionate, respectful, and dependable non-medical care for individuals who want to remain safe and comfortable in their own homes.
                        </p>
                        <p className="mt-6 font-sans text-[18px] leading-8 text-[#5f6772]">
                            We believe great care starts with listening, understanding each family’s needs, and creating a personalized plan that supports both independence and peace of mind.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white px-8 py-10 shadow-sm">
                        <h2 className="text-[28px] text-[#1b2b4a]">Why Families Choose EverTrust</h2>
                        <div className="mt-8 space-y-5">
                            {points.map((point) => (
                                <div key={point} className="flex gap-4">
                                    <CheckCircle2 className="mt-1 h-5 w-5 text-[#6e9c63]" />
                                    <p className="font-sans text-[17px] leading-8 text-[#5f6772]">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#17345d] px-6 py-14 md:px-10 lg:px-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <div className="text-3xl text-white">EverTrust</div>
                        <div className="mt-1 font-sans text-xs uppercase tracking-[0.35em] text-[#d8c596]">
                            Homecare Services
                        </div>
                        <p className="mt-5 max-w-md font-sans text-[17px] leading-8 text-white/80">
                            Compassionate non-medical home care designed to help seniors and families feel supported, safe, and confident at home.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[24px] text-white">Service Area</h4>
                        <p className="mt-4 font-sans text-[17px] leading-8 text-white/80">
                            Proudly serving Fairfax, Falls Church, Arlington, Alexandria, and surrounding Northern Virginia communities.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[24px] text-white">Contact Us</h4>
                        <div className="mt-4 space-y-3 font-sans text-[17px] text-white/80">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#d8c596]" /> (703) 555-0118
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-[#d8c596]" /> Fairfax, Virginia
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}