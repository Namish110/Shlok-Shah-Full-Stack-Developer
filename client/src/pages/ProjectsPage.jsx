import { motion } from "framer-motion";
import { projects } from "../content/portfolio";

const accentStyles = {
  blue: {
    pill: "bg-[#eef4ff] text-[#2855d6]",
    ring: "ring-[#cfe1ff]",
    glow: "shadow-[0_18px_40px_rgba(40,85,214,0.14)]",
  },
  green: {
    pill: "bg-[#ecfdf5] text-[#15803d]",
    ring: "ring-[#c9f3db]",
    glow: "shadow-[0_18px_40px_rgba(21,128,61,0.14)]",
  },
  amber: {
    pill: "bg-[#fff7e6] text-[#b45309]",
    ring: "ring-[#ffe2aa]",
    glow: "shadow-[0_18px_40px_rgba(180,83,9,0.14)]",
  },
  purple: {
    pill: "bg-[#f3e8ff] text-[#7c3aed]",
    ring: "ring-[#e9d5ff]",
    glow: "shadow-[0_18px_40px_rgba(124,58,237,0.14)]",
  },
};

export default function ProjectsPage({ onNavigate }) {
  const navigate = (route) => {
    onNavigate?.(route);
  };

  return (
    <main id="main-content" className="px-4 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="rounded-[32px] border border-[#dbe3f4] bg-white p-6 shadow-[0_20px_60px_rgba(40,85,214,0.08)] sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Projects
          </p>
          <h1 className="mt-4 font-serif text-4xl text-slate-900 sm:text-5xl">
            Selected builds with bright, product-focused case study cards
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            A set of enterprise and government solutions, each with its own accent color and
            a polished visual treatment.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const accent = accentStyles[project.accent];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group overflow-hidden rounded-[30px] border border-[#dbe3f4] bg-white ${accent.glow} transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(40,85,214,0.16)]`}
              >
                <div className={`p-5 ${accent.pill}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                      {project.title}
                    </span>
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
                      Case Study
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className={`overflow-hidden rounded-[24px] ring-1 ${accent.ring}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl text-slate-900">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">{project.tech}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#/contact"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("contact");
                      }}
                      className="rounded-full bg-[#2855d6] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Discuss Similar Work
                    </a>
                    <button
                      type="button"
                      className="rounded-full border border-[#dbe3f4] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#2855d6] hover:text-[#2855d6]"
                    >
                      Live Preview
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
