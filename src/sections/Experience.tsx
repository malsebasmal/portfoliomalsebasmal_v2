import { useEffect } from "react";
import jobsexperience from "@helpers/jobsexperience";
import CardJobs from "@components/CardJobs";
import FadeInGrid from "@helpers/FadeInGrid";

export default function Experience() {
  useEffect(() => {
    const el = document.getElementById("experience-section");
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.animationDelay = "300ms";
        el.style.animationPlayState = "running";
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience-section" className="animate-fade-up my-8">
      <div className="w-full flex items-center justify-center gap-4 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold">
          Professional Experience
        </h3>
        <div className="border-[0.5px] border-solid border-neutral flex-1" />
      </div>
      <FadeInGrid cols={3} gap={6} delay={200}>
        {jobsexperience.map((job) => (
          <CardJobs key={job.company} {...job} />
        ))}
      </FadeInGrid>
    </section>
  );
}