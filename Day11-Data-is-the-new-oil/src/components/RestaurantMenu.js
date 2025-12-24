import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // accordion state
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

  /* ================= Restaurant Info ================= */
  const info = resInfo?.cards[2]?.card?.card?.info ?? {};
  const { name = "", cuisines = [], costForTwoMessage = "" } = info;

  /* ================= Categories ================= */
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      {/* ================= Restaurant Header ================= */}
      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <p className="text-gray-600 mt-1">
          {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines} •{" "}
          {costForTwoMessage}
        </p>
      </div>

      {/* ================= Accordion Menu ================= */}
      <div className="space-y-4">
        {categories.map((categoryCard, index) => {
          const category = categoryCard.card.card;
          const { title, categories: subCategories } = category;
          const isOpen = openIndex === index;

          return (
            <div
              key={category.categoryId || index}
              className="bg-white rounded-xl shadow"
            >
              {/* ===== Accordion Header ===== */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <h2 className="text-lg font-bold text-gray-800">
                  {title}
                </h2>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* ===== Accordion Content ===== */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[2000px] pb-4" : "max-h-0"
                }`}
              >
                {subCategories?.map((subCat, subIndex) => (
                  <div key={subCat.categoryId || subIndex}>
                    <h3 className="px-6 pt-4 text-md font-semibold text-gray-700">
                      {subCat.title}
                    </h3>

                    <div className="px-6 mt-4 space-y-4">
                      {subCat.itemCards?.map((item) => {
                        const itemInfo = item.card.info;

                        return (
                          <div
                            key={itemInfo.id}
                            className="flex justify-between gap-4 border-b pb-4"
                          >
                            {/* Item Info */}
                            <div className="flex-1">
                              <h4 className="font-semibold">
                                {itemInfo.name}
                              </h4>
                              <p className="text-red-500 font-bold mt-1">
                                ₹
                                {itemInfo.price
                                  ? (itemInfo.price / 100).toFixed(2)
                                  : "N/A"}
                              </p>
                              {itemInfo.description && (
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                  {itemInfo.description}
                                </p>
                              )}
                            </div>

                            {/* Image + Add */}
                            {itemInfo.imageId && (
                              <div className="relative">
                                <img
                                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120/${itemInfo.imageId}`}
                                  alt={itemInfo.name}
                                  className="w-24 h-24 object-cover rounded-lg"
                                />
                                <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 text-sm font-bold px-4 py-1 rounded shadow">
                                  ADD +
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
