const RestCard = ({ resData }) => {
  const { image, name, location, rating, cuisine } = resData;
  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-img" alt="res-img" src={image} />
      </div>
      <div className="res-details">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{rating}</h4>
        <p>{cuisine}</p>
      </div>
    </div>
  );
};

export default RestCard;
