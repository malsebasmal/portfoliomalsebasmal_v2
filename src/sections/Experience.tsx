import jobsexperience from "@helpers/jobsexperience";
import CardJobs from "@components/CardJobs";
import FadeInGrid from "@helpers/FadeInGrid";

export default function Experience() {
  return (
    <section className="my-8">
      <div className="w-full flex items-center justify-center gap-4 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold">
          Professional Experience
        </h3>
        <div className="border-[0.5px] border-solid border-neutral-700 flex-1" />
      </div>
      <FadeInGrid cols={3} gap={6} delay={100}>
        {jobsexperience.map((job) => (
          <CardJobs key={job.company} {...job} />
        ))}
      </FadeInGrid>
    </section>
  );
}
