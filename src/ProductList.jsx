import React from "react";

const ProductList = () => {
  const products = [
    {
      title: "Трикотажное платье в полоску",
      image:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.png",
      colors: ["#E0CBBE", "#F1D3E8", "#D2EBF9", "#000000"],
      sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Платье",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7heMrie3GgTaE5lj2GfZU1DWb2yMeVniRCw&s",
      colors: ["#E7DFD7", "#DDEAD4", "#D2EBF9", "#585858"],
      sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Вязаный топ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaL1ilkSI6JGHkXGhyT1RNLq4uPJRvomKSg&s",
      colors: ["#FF0000", "#0000FF", "#808080"],
      sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    },
  ];

  return (
    <div className="container px-4" style={{ maxWidth: "40%" }}>
      <div style={{ height: "500px" }}>
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <div className="flex space-x-2 mb-4">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-200 rounded-lg"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
