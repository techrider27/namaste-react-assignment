import ShimmerContainer from "./ShimmerContainer";
import { useParams } from "react-router-dom";
// import { MENU_url } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_url + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <ShimmerContainer />;

  const { name, cuisines} = resInfo?.cards[2]?.card?.card.info;

  const { itemCards} =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);

  return (
    <div className="menu-card">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
