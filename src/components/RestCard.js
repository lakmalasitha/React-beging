const RestCard = ({ resData }) => {
  const {
    image,
    name,
    address: { street, city },
    rating,
    cuisine,
  } = resData;
  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-img" alt="res-img" src={image} />
      </div>
      <div className="res-details">
        <h2>{name}</h2>
        <h3>{[street]}</h3>
        <h3>{city}</h3>
        <h4>{rating}</h4>
        <p>{cuisine.join(" , ")}</p>
      </div>
    </div>
  );
};

export default RestCard;
