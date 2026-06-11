 function Card({
  title,
  description,
  onCardClick,
}){
  return (
     <div
  className="card"
   onClick={() => onCardClick(title)}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.backgroundColor = "#f0f0f0";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.backgroundColor = "white";
  }}
>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;