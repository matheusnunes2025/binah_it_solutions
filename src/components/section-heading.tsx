type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
