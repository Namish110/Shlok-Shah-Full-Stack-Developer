import { motion } from "framer-motion";
import { experienceEntries } from "../content/portfolio";

const impactCards = [
  { label: "API speed improvement", value: "45%", accent: "blue" },
  { label: "Users served", value: "10K+", accent: "green" },
  { label: "Security posture", value: "OWASP", accent: "amber" },
  { label: "Mentoring", value: "Team-led", accent: "purple" },
];

export default function ExperiencePage({ onNavigate }) {
  const navigate = (route) => {
    onNavigate?.(route);
  };

  return (
    <main id="main-content" className="px-4 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="rounded-[32px] border border-[#dbe3f4] bg-white p-6 shadow-[0_20px_60px_rgba(40,85,214,0.08)] sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Experience
          </p>
          <h1 className="mt-4 font-serif text-4xl text-slate-900 sm:text-5xl">
            A timeline shaped by enterprise delivery, security, and measurable results
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            I’ve worked across government and enterprise programs where reliability, performance,
            and secure execution mattered every day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((card, index) => {
              const palette = {
                blue: "bg-[#eef4ff] text-[#2855d6]",
                green: "bg-[#ecfdf5] text-[#15803d]",
                amber: "bg-[#fff7e6] text-[#b45309]",
                purple: "bg-[#f3e8ff] text-[#7c3aed]",
              };
              return (
                <div
                  key={card.label}
                  className={`rounded-[26px] border border-[#dbe3f4] p-5 shadow-[0_12px_30px_rgba(40,85,214,0.06)] ${palette[card.accent]}`}
                >
                  <div className="text-3xl font-semibold">{card.value}</div>
                  <p className="mt-2 text-sm font-medium text-slate-600">{card.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-8 grid gap-6">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#2855d6] via-[#8b5cf6] to-transparent sm:left-1/2" />
          {experienceEntries.map((entry, index) => {
            const isLeft = index % 2 === 0;
            const accentMap = {
              blue: "bg-[#2855d6]",
              green: "bg-[#16a34a]",
              amber: "bg-[#d97706]",
              purple: "bg-[#7c3aed]",
            };

            return (
              <motion.div
                key={`${entry.company}-${entry.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center ${
                  isLeft ? "" : ""
                }`}
              >
                <div className={`${isLeft ? "sm:order-1" : "sm:order-3"}`}>
                  <div className="rounded-[28px] border border-[#dbe3f4] bg-white p-6 shadow-[0_16px_40px_rgba(40,85,214,0.08)]">
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {entry.time}
                    </div>
                    <h2 className="mt-3 font-serif text-3xl text-slate-900">{entry.role}</h2>
                    <p className="mt-1 text-sm font-semibold text-[#2855d6]">{entry.company}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#dbe3f4] bg-[#f9fbff] px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2855d6]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#f5f7ff] shadow-[0_10px_25px_rgba(40,85,214,0.18)] sm:flex">
                  <span className={`h-4 w-4 rounded-full ${accentMap[entry.accent]}`} />
                </div>

                <div className="hidden sm:block" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#/projects"
            onClick={(event) => {
              event.preventDefault();
              navigate("projects");
            }}
            className="rounded-full bg-[#2855d6] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(40,85,214,0.24)] transition hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#/contact"
            onClick={(event) => {
              event.preventDefault();
              navigate("contact");
            }}
            className="rounded-full border border-[#dbe3f4] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#2855d6] hover:text-[#2855d6]"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
