// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

// const ItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="px-6 mt-4 space-y-4">
//       {items?.map((item) => {
//         const itemInfo = item.card.info;

//         return (
//           <div
//             key={itemInfo.id}
//             className="flex justify-between gap-4 border-b pb-4"
//           >
//             {/* Item Info */}
//             <div className="flex-1">
//               <h4 className="font-semibold">{itemInfo.name}</h4>

//               <p className="text-red-500 font-bold mt-1">
//                 ₹
//                 {itemInfo.price
//                   ? (itemInfo.price / 100).toFixed(2)
//                   : "N/A"}
//               </p>

//               {itemInfo.description && (
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                   {itemInfo.description}
//                 </p>
//               )}
//             </div>

//             {/* Image + Add */}
//             {itemInfo.imageId && (
//               <div className="relative">
//                 <img
//                   src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_120/${itemInfo.imageId}`}
//                   alt={itemInfo.name}
//                   className="w-24 h-24 object-cover rounded-lg"
//                 />
//                 <button
//                   className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 text-sm font-bold px-4 py-1 rounded shadow"
//                   onClick={() => handleAddItem(item)}
//                 >
//                   ADD +
//                 </button>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ItemList;


import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="px-6 mt-4 space-y-6">
      {items?.map((item, index) => {
        const itemInfo = item.card.info;

        return (
          <div
            key={`${itemInfo.id}-${index}`}
            className="flex justify-between gap-6 border-b pb-6 last:border-b-0"
          >
            {/* 📝 Item Info */}
            <div className="flex-1">
              <h4 className="text-base font-semibold text-gray-800">
                {itemInfo.name}
              </h4>

              <p className="text-green-600 font-bold mt-1">
                ₹
                {itemInfo.price
                  ? (itemInfo.price / 100).toFixed(2)
                  : "N/A"}
              </p>

              {itemInfo.description && (
                <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
                  {itemInfo.description}
                </p>
              )}
            </div>

            {/* 🖼 Image + ADD */}
            {itemInfo.imageId && (
              <div className="relative flex-shrink-0">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_160/${itemInfo.imageId}`}
                  alt={itemInfo.name}
                  className="w-28 h-28 object-cover rounded-xl shadow-sm transition-transform duration-300 hover:scale-105"
                />

                <button
                  onClick={() => handleAddItem(item)}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-green-600 text-sm font-bold px-5 py-1.5 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  ADD +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
