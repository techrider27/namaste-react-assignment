import { useDispatch } from "react-redux";
import { CDN_url } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  console.log(items.items);
  console.log(dummy);
  //   console.log(items.items[0]?.card?.info.name);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="border-gray-200 border-b-2 p-2 m-2"
          >
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-md font-bold mr-2.5">
                  {item.card.info.name}
                </span>
                <span>- ₹ {item.card.info.price / 100}</span>
                <p>{item.card.info.description}</p>
              </div>
              <div className="w-3/12">
                <div className="relative">
                  <img
                    src={CDN_url + item.card.info.imageId}
                    className="w-full h-32 object-cover rounded-xl"
                  ></img>
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
                    <button
                      className=" bg-black text-white py-2 px-3 rounded-xl"
                      onClick={() => handleAddItem(item)}
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
