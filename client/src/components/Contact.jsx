import { useState } from "react";

const contactItems = [
  {
    label: "Email",
    value: "guptanamish11@gamail.com",
    href: "mailto:guptanamish11@gamail.com",
  },
 
  {
    label: "Location",
    value: "Delhi, India",
    href: "https://maps.google.com/?q=Delhi,India",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/shlokshahdeveloper",
  },
  {
    label: "GitHub",
    value: "Review code",
    href: "https://github.com/Namish110",
  },
];

const availabilityItems = ["Full-Time", "Freelance", "Consulting", "Remote"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject || "Portfolio Contact Message");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:guptanamish11@gamail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="editorial-section px-6 section-alt">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">Let&apos;s build something amazing together</h2>
          <p className="text-muted mt-4 leading-relaxed">
            Short introduction text about your project, role, or collaboration idea. I&apos;m open to conversations
            that lead to useful, reliable work.
          </p>
        </div>

        <div className="contact-layout">
          <div className="glass-card hover-card contact-info-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="section-kicker">Contact Info</p>
                <h3 className="section-title mt-3 text-2xl">Reach me directly</h3>
              </div>
              <div className="hidden h-12 w-12 rounded-full border border-[rgba(56,189,248,0.35)] bg-[rgba(56,189,248,0.08)] sm:grid place-items-center">
                <span className="text-accent text-xl">✦</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(255,255,255,0.02)] px-4 py-4 transition hover:border-[rgba(56,189,248,0.4)] hover:bg-[rgba(56,189,248,0.06)]"
                >
                  <span className="text-sm uppercase tracking-[0.18em] text-muted">{item.label}</span>
                  <span className="text-right text-sm font-semibold text-primary">{item.value}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[rgba(56,189,248,0.22)] bg-[rgba(6,10,18,0.6)] p-5">
              <p className="section-kicker">Available For</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {availabilityItems.map((item) => (
                  <span key={item} className="soft-border rounded-full px-4 py-2 text-sm text-muted">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card hover-card contact-form-card">
            <div>
              <p className="section-kicker">Send Message</p>
              <h3 className="section-title mt-3 text-2xl">Contact us form</h3>
              <p className="text-muted mt-4 leading-relaxed">
                Fill in the details below and hit send. It will open your email client with the message prefilled.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.18em] text-muted">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-[rgba(148,163,184,0.22)] bg-[rgba(6,10,18,0.75)] px-4 py-3 text-primary outline-none transition placeholder:text-[rgba(170,194,220,0.45)] focus:border-[rgba(56,189,248,0.55)]"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.18em] text-muted">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-[rgba(148,163,184,0.22)] bg-[rgba(6,10,18,0.75)] px-4 py-3 text-primary outline-none transition placeholder:text-[rgba(170,194,220,0.45)] focus:border-[rgba(56,189,248,0.55)]"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.18em] text-muted">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-[rgba(148,163,184,0.22)] bg-[rgba(6,10,18,0.75)] px-4 py-3 text-primary outline-none transition placeholder:text-[rgba(170,194,220,0.45)] focus:border-[rgba(56,189,248,0.55)]"
                  placeholder="Project inquiry"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.18em] text-muted">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="rounded-2xl border border-[rgba(148,163,184,0.22)] bg-[rgba(6,10,18,0.75)] px-4 py-3 text-primary outline-none transition placeholder:text-[rgba(170,194,220,0.45)] focus:border-[rgba(56,189,248,0.55)]"
                  placeholder="Tell me about your role, project, or idea..."
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="btn-accent magnetic">
                  Send Message
                </button>
                <p className="text-sm text-muted">
                  Or email directly at{" "}
                  <a className="text-accent hover:underline" href="mailto:guptanamish11@gamail.com">
                    guptanamish11@gamail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <svg className="section-svg contact-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 12 H70 M86 12 H130 M10 30 H48 M72 30 H130" />
          <circle cx="10" cy="12" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
      </div>
    </section>
  );
}
