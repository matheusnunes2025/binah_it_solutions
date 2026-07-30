type BrandLogoProps = {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  lightBg?: boolean;
};

export function BrandLogo({ showText = true, size = "md" }: BrandLogoProps) {
  return (
    <span className={`brand-lockup brand-lockup--${size}`}>
      <span className="brand-monogram" aria-hidden="true">
        <span>B</span>
        <i />
      </span>
      {showText ? (
        <span className="brand-wordmark">
          <strong>BINAH</strong>
          <small>IT SOLUTIONS</small>
        </span>
      ) : null}
    </span>
  );
}
