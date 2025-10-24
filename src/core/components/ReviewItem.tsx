export interface Review {
  name: string;
  text: string;
  role?: string;
  avatar?: string;
}

interface ReviewItemProps {
  item: Review;
  className?: string;
  imageWrapperClassName?: string;
  textClassName?: string;
  nameClassName?: string;
  roleClassName?: string;
  avatarClassName?: string;
}

function ReviewItem({
  item,
  className = "",
  imageWrapperClassName = "",
  textClassName = "",
  nameClassName = "",
  roleClassName = "",
  avatarClassName = "",
}: ReviewItemProps) {
  return (
    <div className={className}>
      <div className={imageWrapperClassName}>
        {item.avatar && <img src={item.avatar} alt={item.name} className={avatarClassName} />}
        <div>
          <h4 className={nameClassName}>{item.name}</h4>
          {item.role && <p className={roleClassName}>{item.role}</p>}
        </div>
      </div>

      <p className={textClassName}>{item.text}</p>
    </div>
  );
}

export default ReviewItem;
