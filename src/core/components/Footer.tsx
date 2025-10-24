export interface Contact {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

interface FooterProps {
  contacts: Contact[];
  title?: string;
  copyright?: string;
  className?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  iconWrapperClassName?: string;
  copyrightClassName?: string;
}

function Footer({
  contacts,
  title,
  copyright,
  className = "",
  titleClassName = "",
  listClassName = "",
  itemClassName = "",
  iconWrapperClassName = "",
  copyrightClassName = "",
}: FooterProps) {
  return (
    <footer className={className}>
      {title && <h3 className={titleClassName}>{title}</h3>}

      <ul className={listClassName}>
        {contacts.map((item, index) => (
          <li key={index} className={itemClassName}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon && <span className={iconWrapperClassName}>{item.icon}</span>}
                {item.label}: {item.value}
              </a>
            ) : (
              <span>
                {item.icon && <span className={iconWrapperClassName}>{item.icon}</span>}
                {item.label}: {item.value}
              </span>
            )}
          </li>
        ))}
      </ul>

      {copyright && <p className={copyrightClassName}>{copyright}</p>}
    </footer>
  );
}

export default Footer;
