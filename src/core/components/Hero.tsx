type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText: string;
  onCtaClick?: () => void;
  titleClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
};

function Hero({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  titleClassName = "",
  subtitleClassName = "",
  buttonClassName = "",
}: HeroProps) {
  return (
    <div>
      <h1 className={titleClassName}>{title}</h1>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      <button type="button" onClick={onCtaClick} className={buttonClassName}>
        {ctaText}
      </button>
    </div>
  );
}

export default Hero;
