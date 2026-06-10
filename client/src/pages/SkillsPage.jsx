import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { skillCategories, skillSummary } from "../content/portfolio";

const categories = Object.keys(skillCategories);

export default function SkillsPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const skills = useMemo(() => skillCategories[activeCategory], [activeCategory]);

  const navigate = (route) => {
    onNavigate?.(route);
  };

  return (
    <main id="main-content" className="px-4 pt-32 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="rounded-[32px] border border-[#dbe3f4] bg-white p-6 shadow-[0_20px_60px_rgba(40,85,214,0.08)] sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Skills</p>
          <h1 className="mt-4 font-serif text-4xl text-slate-900 sm:text-5xl">
            Modern engineering skills across backend, cloud, and product delivery
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            I keep my stack practical and focused: solid backend architecture, thoughtful frontend
            execution, secure integrations, and cloud-ready delivery practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#2855d6] text-white shadow-[0_16px_30px_rgba(40,85,214,0.2)]"
                    : "border border-[#dbe3f4] bg-white text-slate-700 hover:border-[#2855d6] hover:text-[#2855d6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {skillSummary.map((item, index) => {
              const accents = ["bg-[#eef4ff]", "bg-[#ecfdf5]", "bg-[#fff7e6]"];
              const text = ["text-[#2855d6]", "text-[#15803d]", "text-[#b45309]"];
              return (
                <div
                  key={item.label}
                  className={`rounded-[26px] border border-[#dbe3f4] p-5 shadow-[0_12px_30px_rgba(40,85,214,0.06)] ${
                    accents[index]
                  }`}
                >
                  <div className={`text-3xl font-semibold ${text[index]}`}>{item.value}</div>
                  <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#dbe3f4] bg-[#f9fbff] p-5">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#dbe3f4] bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2855d6] hover:text-[#2855d6]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#/experience"
              onClick={(event) => {
                event.preventDefault();
                navigate("experience");
              }}
              className="rounded-full bg-[#2855d6] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(40,85,214,0.24)] transition hover:-translate-y-0.5"
            >
              View Experience
            </a>
            <a
              href="#/projects"
              onClick={(event) => {
                event.preventDefault();
                navigate("projects");
              }}
              className="rounded-full border border-[#dbe3f4] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#2855d6] hover:text-[#2855d6]"
            >
              See Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
