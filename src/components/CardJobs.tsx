"use client";

import { useRef } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, color-mix(in srgb, #a1d494 10%, transparent) 0%, transparent 65%)`;
    glare.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    glare.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="shadow-terminal bg-neutral rounded-lg px-6 md:px-8 py-6 md:py-8 flex flex-col items-start justify-center gap-6 relative overflow-hidden will-change-transform"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-lg opacity-0"
        style={{ transition: "opacity 0.2s ease-out", zIndex: 10 }}
      />

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