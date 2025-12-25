// import ItemList from "./ItemList";

// const RestaurantCategory = ({ data, isOpen, setOpenIndex }) => {
//   const { title, categories } = data;

//   return (
//     <div className="bg-white rounded-xl shadow">
//       {/* Accordion Header */}
//       <button
//         onClick={setOpenIndex}
//         className="w-full flex justify-between items-center px-6 py-4 text-left"
//       >
//         <h2 className="text-lg font-bold text-gray-800">{title}</h2>
//         <span
//           className={`text-xl transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           ⌄
//         </span>
//       </button>

//       {/* Accordion Body */}
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-[2000px] pb-4" : "max-h-0"
//         }`}
//       >
//         {categories?.map((subCat) => (
//           <div key={subCat.categoryId}>
//             <h3 className="px-6 pt-4 text-md font-semibold text-gray-700">
//               {subCat.title}
//             </h3>

//             <ItemList items={subCat.itemCards} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;


import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setOpenIndex }) => {
  const { title, categories } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* 🔽 Accordion Header */}
      <button
        onClick={setOpenIndex}
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-lg font-bold text-gray-900">
          {title}
        </h2>

        <span
          className={`text-xl text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {/* 📂 Accordion Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {categories?.map((subCat) => (
          <div key={subCat.categoryId} className="pb-4">
            <h3 className="px-6 pt-4 text-md font-semibold text-gray-700 border-t">
              {subCat.title}
            </h3>

            <ItemList items={subCat.itemCards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
