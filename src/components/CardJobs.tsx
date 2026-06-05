interface Props {
  company: string;
  position: string;
  time: string;
  about: string;
  type: boolean;
}

export default function CardJobs({
  company,
  position,
  time,
  about,
  type,
}: Props) {
  return (
    <div className="shadow-terminal bg-neutral rounded-lg px-6 md:px-8 py-6 md:py-8 flex flex-col items-start justify-center gap-6">
      <div className="w-full flex items-center justify-start gap-3">
        <div className="border-l-6 border-solid border-green-secondary h-6 rounded-full" />
        <h4 className="text-xl font-bold">{company}</h4>
      </div>
      <h5 className="font-medium font-label text-rose-secondary">{position}</h5>
      <p
        className={`font-label rounded-md px-4 py-1 font-black border text-sm border-green-secondary ${
          type
            ? "bg-green-secondary text-green-primary"
            : "bg-green-text-background text-green-secondary"
        }`}
      >
        {time}
      </p>
      <p className="text-gray-300">{about}</p>
    </div>
  );
}
