const RestCard = ({ resData }) => {
  const { image, name, location, rating, cuisine } = resData;
  return (
    <div className="res-card shadow-2xl">
      <div className="res-image">
        <img
          className="res-img  h-80 w-full object-cover"
          alt="res-img"
          src={image}
        />
      </div>
      <div className="res-details p-5 ">
        <h2 className="font-bold pb-3">{name}</h2>
        <h3 className="">{location}</h3>
        <h4 className="text-amber-300">{rating}</h4>
        <p className="font-semibold">{cuisine}</p>
      </div>
    </div>
  );
};

export default RestCard;
