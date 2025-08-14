import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurantMenu(id);

  if (!restaurant || !restaurant.menu) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>test</h1>
      <ul>
        {restaurant.menu.map((item) => (
          <li key={item.item_id}>
            <span>{item.category}</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
