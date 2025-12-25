import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  /* Restaurant Info */
  const info = resInfo?.cards[2]?.card?.card?.info ?? {};
  const { name = "", cuisines = [], costForTwoMessage = "" } = info;

  /* Categories */
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      {/* Restaurant Header */}
      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <p className="text-gray-600 mt-1">
          {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines} •{" "}
          {costForTwoMessage}
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((categoryCard, index) => (
          <RestaurantCategory
            key={categoryCard.card.card.categoryId || index}
            data={categoryCard.card.card}
            isOpen={openIndex === index}
            setOpenIndex={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
