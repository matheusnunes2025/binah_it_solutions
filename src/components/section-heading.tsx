type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={isDark ? "eyebrow text-[#C8A679]" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          isDark ? "text-[#F8F5ED]" : "text-[#1E1E1E]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            isDark ? "text-stone-300" : "text-[#2D2D2D]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
