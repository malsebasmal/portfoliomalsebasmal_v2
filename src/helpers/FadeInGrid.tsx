import { Children } from "react";

interface Props {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8;
  delay?: number;
}

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const gapMap = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
};

export default function FadeInGrid({
  children,
  cols = 3,
  gap = 6,
  delay = 100,
}: Props) {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className={`grid ${colsMap[cols]} ${gapMap[gap]}`}>
        {Children.toArray(children).map((child, idx) => (
          <div
            key={idx}
            style={{
              opacity: 0,
              animation: "fadeInUp 0.5s ease-out forwards",
              animationDelay: `${idx * delay}ms`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}
