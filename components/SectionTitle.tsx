interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const accentClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-[#1a2744]"}`}>
        {title}
      </h2>
      {/* Gold decorative underline */}
      <div className={`mt-3 h-1 w-12 rounded-full bg-[#c9a84c] ${accentClass}`} />
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${accentClass} ${light ? "text-gray-300" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
