import { Link } from "react-router-dom"
import { Heart, Users, ShieldCheck, Phone, MapPin, Clock3 } from "lucide-react"

export default function Services() {
    const services = [
        {
            title: "Personal Care",
            icon: <Heart className="h-12 w-12 text-[#6e9c63]" strokeWidth={1.5} />,
            text: "Support with bathing, dressing, grooming, toileting, mobility, and daily personal hygiene routines.",
        },
        {
            title: "Companion Care",
            icon: <Users className="h-12 w-12 text-[#6e9c63]" strokeWidth={1.5} />,
            text: "Friendly companionship, conversation, help with errands, meal support, and meaningful social interaction.",
        },
        {
            title: "24/7 Support",
            icon: <ShieldCheck className="h-12 w-12 text-[#6e9c63]" strokeWidth={1.5} />,
            text: "Flexible care options ranging from a few hours a day to overnight care and around-the-clock support.",
        },
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
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <div className="font-sans text-sm uppercase tracking-[0.35em] text-[#6e9c63]">Our Services</div>
                        <h1 className="mt-4 text-[38px] text-[#1b2b4a] md:text-[62px]">Care Designed Around Your Needs</h1>
                        <p className="mx-auto mt-6 max-w-3xl font-sans text-[18px] leading-8 text-[#5f6772]">
                            EverTrust Homecare Services provides dependable, compassionate non-medical care to help clients remain comfortable, supported, and independent at home.
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.title} className="rounded-[22px] bg-white px-8 py-10 shadow-sm">
                                <div className="mb-6">{service.icon}</div>
                                <h2 className="text-[28px] text-[#1b2b4a]">{service.title}</h2>
                                <p className="mt-4 font-sans text-[17px] leading-8 text-[#5f6772]">{service.text}</p>
                            </div>
                        ))}
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