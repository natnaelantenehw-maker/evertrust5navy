import {
  Heart,
  Users,
  ShieldCheck,
  Phone,
  MapPin,
  Clock3,
  ChevronRight,
  CalendarCheck2,
  ClipboardList,
  UserCheck,
  HelpCircle,
  Star,
  CheckCircle2,
} from "lucide-react"

export default function App() {
  const services = [
    {
      title: "Personal Care",
      icon: <Heart className="mx-auto h-14 w-14 text-[#6e9c63]" strokeWidth={1.5} />,
      text: "Assistance with bathing, dressing, grooming, and personal hygiene.",
    },
    {
      title: "Companion Care",
      icon: <Users className="mx-auto h-14 w-14 text-[#6e9c63]" strokeWidth={1.5} />,
      text: "Friendly companionship, help with errands, and meaningful social connection.",
    },
    {
      title: "24/7 Support",
      icon: <ShieldCheck className="mx-auto h-14 w-14 text-[#6e9c63]" strokeWidth={1.5} />,
      text: "Round-the-clock care for peace of mind at any hour.",
    },
  ]

  const reasons = [
    "Experienced & Compassionate Caregivers",
    "Personalized Care Plans Tailored for Your Needs",
    "Licensed, Bonded & Insured for Your Peace of Mind",
    "Responsive support with care available from a few hours to around-the-clock assistance.",
  ]

  const process = [
    {
      title: "Schedule a Consultation",
      text: "Speak with our care team so we can understand your needs, timing, and preferences.",
      icon: <Phone className="h-10 w-10 text-[#c8a24f]" strokeWidth={1.7} />,
    },
    {
      title: "Create a Care Plan",
      text: "We build a personalized plan based on routines, goals, and the level of support needed.",
      icon: <ClipboardList className="h-10 w-10 text-[#c8a24f]" strokeWidth={1.7} />,
    },
    {
      title: "Match the Right Caregiver",
      text: "We carefully match your loved one with a compassionate caregiver who fits their needs.",
      icon: <UserCheck className="h-10 w-10 text-[#c8a24f]" strokeWidth={1.7} />,
    },
  ]

  const faqs = [
    {
      q: "What types of home care do you provide?",
      a: "We provide companionship, personal care, respite support, meal preparation, light housekeeping, transportation assistance, and flexible hourly or 24/7 care.",
    },
    {
      q: "How quickly can care begin?",
      a: "In many cases, care can begin quickly after an initial consultation and assessment, depending on the schedule and level of support required.",
    },
    {
      q: "Are your care plans customized?",
      a: "Yes. Every client receives a personalized care plan designed around daily routines, preferences, and changing needs.",
    },
    {
      q: "Do you serve families throughout Northern Virginia?",
      a: "Yes. We proudly serve families across Northern Virginia and nearby communities with dependable in-home care support.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-slate-800" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
      <div className="bg-[#17345d] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 font-sans text-sm md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center gap-5 text-white/90">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call Us: (703) 555-0118</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Serving Northern Virginia</div>
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> Available 24/7</div>
          </div>
          <button className="w-fit rounded-md border border-[#d8ba72] px-4 py-2 text-[#f1ddb0] transition hover:bg-white/10">
            Request a Free Consultation
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-[#e9ece5] bg-[#f8f7f3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
                  <div className="flex items-center gap-3">
                      <img
                          src="/evertrustlogo.png"
                          alt="EverTrust Icon"
                          className="h-20 w-auto"
                      />
                      <div>
                          <div className="text-3xl text-[#C8A24F] md:text-4xl">EverTrust</div>
                          <div className="font-sans text-xs uppercase tracking-[0.35em] text-[#C8A24F]">
                              Homecare Services
                          </div>
                      </div>
                  </div>

          <nav className="hidden items-center gap-8 font-sans text-[15px] text-[#394353] lg:flex">
            <a href="#services" className="transition hover:text-[#1b2b4a]">Services</a>
            <a href="#about" className="transition hover:text-[#1b2b4a]">About</a>
            <a href="#process" className="transition hover:text-[#1b2b4a]">Our Process</a>
            <a href="#faq" className="transition hover:text-[#1b2b4a]">FAQ</a>
            <a href="#contact" className="transition hover:text-[#1b2b4a]">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f8f7f3]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-24 pt-10 md:grid-cols-2 md:px-10 lg:px-16 lg:pt-14">
          <div className="max-w-xl pt-4 md:pt-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9dfd3] bg-white/80 px-4 py-2 font-sans text-sm text-[#5a6470] shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-[#6e9c63]" /> Compassionate in-home care tailored to your family
            </div>
            <h1 className="text-[40px] leading-[1.15] text-[#1b2b4a] md:text-[68px]">
              Compassionate Care
              <br />
              You Can Trust
            </h1>
            <p className="mt-6 max-w-lg font-sans text-[19px] leading-9 text-[#575d68] md:text-[20px]">
              Providing professional and compassionate in-home care for your loved ones. Our trusted caregivers are here to help with daily activities and ensure your family&apos;s comfort and wellbeing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-[#78a565] px-8 py-4 font-sans text-xl font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_4px_10px_rgba(0,0,0,.08)] transition hover:opacity-95">
                Request Care Today
              </button>
              <button className="rounded-md border border-[#d9dfd3] bg-white px-8 py-4 font-sans text-xl font-medium text-[#1b2b4a] shadow-sm transition hover:bg-[#f4f6f1]">
                View Care Options
              </button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 font-sans text-[16px] text-[#56616c] sm:grid-cols-3">
              <div className="rounded-xl bg-white/85 px-4 py-4 shadow-sm"><span className="block text-2xl text-[#1b2b4a]">24/7</span> Flexible availability</div>
              <div className="rounded-xl bg-white/85 px-4 py-4 shadow-sm"><span className="block text-2xl text-[#1b2b4a]">Tailored</span> Personalized care plans</div>
              <div className="rounded-xl bg-white/85 px-4 py-4 shadow-sm"><span className="block text-2xl text-[#1b2b4a]">Local</span> Northern Virginia support</div>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="relative h-[420px] w-full max-w-[690px] overflow-hidden rounded-bl-[120px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0_20px_50px_rgba(0,0,0,.08)] md:h-[560px] lg:h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver smiling with older woman at home"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f3] via-[#f8f7f3]/40 to-transparent" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 150" className="h-[120px] w-full" preserveAspectRatio="none">
            <path d="M0,85 C180,45 320,130 520,92 C700,58 830,115 1000,90 C1180,63 1290,45 1440,78 L1440,150 L0,150 Z" fill="#dceadc" />
            <path d="M0,104 C240,62 380,134 610,104 C860,72 1030,123 1440,98 L1440,150 L0,150 Z" fill="#edf3ec" />
          </svg>
        </div>
      </section>

      <section className="-mt-1 bg-[#eef3ee] px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
          {[
            "Free initial consultation",
            "Care from a few hours to 24/7 support",
            "Personalized care recommendations",
            "Fast response for changing care needs",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/80 px-5 py-5 font-sans text-[17px] text-[#46505d] shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-[#c8a24f]"><Star className="h-4 w-4 fill-current" /> <span className="text-sm uppercase tracking-[0.2em]">Trusted Care</span></div>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative bg-[#f8f7f3] px-6 pb-24 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-center gap-5">
            <div className="h-px w-24 bg-[#dcc27a] md:w-60" />
            <div className="text-center text-[34px] text-[#1b2b4a] md:text-[58px]">Our Homecare Services</div>
            <div className="h-px w-24 bg-[#dcc27a] md:w-60" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[18px] border border-[#eef0ea] bg-white/95 px-8 py-10 text-center shadow-[0_14px_35px_rgba(0,0,0,.06)]"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-[28px] text-[#1b2b4a] md:text-[34px]">{service.title}</h3>
                <p className="mt-4 font-sans text-[18px] leading-8 text-[#60656d]">{service.text}</p>
                <button className="mt-7 inline-flex items-center gap-2 font-sans text-[20px] text-[#6e9c63]">
                  Learn More <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-md bg-[#6f9a5c] px-12 py-4 font-sans text-xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_4px_10px_rgba(0,0,0,.08)]">
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-[#f7f8f5] px-6 pb-24 pt-12 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-80">
          <svg viewBox="0 0 1440 500" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0,150 C230,120 300,220 520,180 C760,136 900,250 1140,190 C1280,155 1350,165 1440,185 L1440,500 L0,500 Z" fill="#eef3ee" />
            <path d="M0,240 C220,200 360,300 610,250 C850,204 1030,310 1440,260 L1440,500 L0,500 Z" fill="#e8efea" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.12fr_.88fr]">
          <div className="pt-4">
            <h2 className="text-[38px] leading-tight text-[#1b2b4a] md:text-[62px]">Why Choose EverTrust?</h2>
            <ul className="mt-8 space-y-6 font-sans text-[20px] leading-8 text-[#4f5662] md:text-[22px]">
              {reasons.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-1 text-[#669a5c]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 rounded-md bg-[#c8a24f] px-8 py-4 font-sans text-xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_5px_12px_rgba(0,0,0,.08)]">
              Learn More About Us
            </button>
          </div>

          <div className="self-start">
            <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]">
              <img
                src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver with older man smiling"
                className="h-[270px] w-full object-cover"
              />
              <div className="px-10 py-9 text-center">
                <div className="mb-2 text-5xl text-[#d3b26a]">“</div>
                <p className="font-sans text-[19px] leading-9 text-[#636975] md:text-[20px]">
                  <span className="font-medium italic">EverTrust</span> provided compassionate and professional care for my mother. The caregivers were attentive, caring, and truly felt like part of our family. I highly recommend their services!
                </p>
                <div className="mt-6 flex items-center justify-end gap-4">
                  <div className="h-px w-16 bg-[#dcc27a]" />
                  <div className="font-sans text-[20px] font-semibold text-[#1b2b4a] md:text-[22px]">Jessica M.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#d3b26a]" />
          <span className="h-3 w-3 rounded-full bg-[#c9cdcb]" />
          <span className="h-3 w-3 rounded-full bg-[#c9cdcb]" />
          <span className="h-3 w-3 rounded-full bg-[#c9cdcb]" />
        </div>
      </section>

      <section id="process" className="bg-[#ffffff] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-sans text-sm uppercase tracking-[0.35em] text-[#6e9c63]">Simple & Supportive</div>
            <h3 className="mt-4 text-[36px] text-[#1b2b4a] md:text-[58px]">Our Care Process</h3>
            <p className="mx-auto mt-5 max-w-3xl font-sans text-[18px] leading-8 text-[#5f6772] md:text-[20px]">
              We make it easier to get the right support at home with a clear, guided process focused on comfort, dignity, and peace of mind.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-[22px] border border-[#ebeee8] bg-[#f9faf7] px-8 py-9 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  {step.icon}
                  <div className="text-5xl text-[#d8c596]">0{index + 1}</div>
                </div>
                <h4 className="text-[28px] text-[#1b2b4a]">{step.title}</h4>
                <p className="mt-4 font-sans text-[18px] leading-8 text-[#5f6772]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ec] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[28px] bg-[#17345d] px-8 py-10 md:flex-row md:items-center md:px-12">
          <div>
            <div className="font-sans text-sm uppercase tracking-[0.3em] text-[#d8c596]">Free Consultation</div>
            <h3 className="mt-3 text-[34px] leading-tight text-white md:text-[48px]">Not sure what type of care you need?</h3>
            <p className="mt-4 max-w-2xl font-sans text-[18px] leading-8 text-white/80">
              Our team can help you understand care options, answer questions, and recommend support that fits your loved one&apos;s needs.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-[#c8a24f] px-8 py-4 font-sans text-lg text-white shadow-lg">
            <CalendarCheck2 className="h-5 w-5" /> Schedule a Consultation
          </button>
        </div>
      </section>

      <section id="faq" className="bg-[#f8f7f3] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="font-sans text-sm uppercase tracking-[0.35em] text-[#6e9c63]">Helpful Answers</div>
            <h3 className="mt-4 text-[36px] text-[#1b2b4a] md:text-[56px]">Frequently Asked Questions</h3>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[18px] border border-[#ecefe7] bg-white px-7 py-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <HelpCircle className="mt-1 h-6 w-6 text-[#c8a24f]" />
                  <div>
                    <h4 className="text-[24px] text-[#1b2b4a]">{faq.q}</h4>
                    <p className="mt-3 font-sans text-[17px] leading-8 text-[#5f6772]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#17345d] px-6 py-14 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-3xl text-white">EverTrust</div>
            <div className="mt-1 font-sans text-xs uppercase tracking-[0.35em] text-[#d8c596]">Homecare Services</div>
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
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#d8c596]" /> (703) 555-0118</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#d8c596]" /> Fairfax, Virginia</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
