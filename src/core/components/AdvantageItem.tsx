export interface Advantage {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface AdvantageItemProps {
  item: Advantage;
  className?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

function AdvantageItem({
  item,
  className = "",
  iconWrapperClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: AdvantageItemProps) {
  return (
    <div className={className}>
      {item.icon && <div className={iconWrapperClassName}>{item.icon}</div>}
      <h3 className={titleClassName}>{item.title}</h3>
      <p className={descriptionClassName}>{item.description}</p>
    </div>
  );
}

export default AdvantageItem;
