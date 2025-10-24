export interface NavItem {
  name: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
}

export default function Navigation({ items, className = "", linkClassName = "" }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    history.replaceState(null, "", " ");
  };

  return (
    <nav className={className}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={linkClassName}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
