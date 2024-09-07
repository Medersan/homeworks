const ProductList = () => {
  const data = [
    {
      image: "",
      title: "Cardigan",
      scale: ["XL", "Y", "KL", "LLX", "LKL"],
      colors: {
        first: "red",
        second: "blue",
        third: "green",
        fourth: "black",
      },
    },
    {
      image: "",
      title: "Cardigan",
      scale: ["XL", "Y", "KL", "LLX", "LKL"],
      colors: {
        first: "red",
        second: "blue",
        third: "green",
        fourth: "black",
      },
    },
    {
      image: "",
      title: "Cardigan",
      scale: ["XL", "Y", "KL", "LLX", "LKL"],
      colors: {
        first: "red",
        second: "blue",
        third: "green",
        fourth: "black",
      },
    },
  ];

  return (
    <div className="p-5 bg-gray-400">  
      {data.map((d, index) => (
        <div
          key={index}
          className="w-[46rem] m-2 bg-white rounded-md overflow-hidden py-3 px-10 "     
        >
          <div>
            <h1 className="text-2xl ml-1 mb-4">{d.title}</h1>
          </div>
          <div className="card bg-base-300 w-full flex gap-20 ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="h-[13rem] w-[8rem] rounded"
              />
            </figure>
            <div className="card-body">
              <div className=" flex gap-8">
                <p>Available colors</p>
                <div>
                  <div className="flex gap-2">
                    <div
                      style={{ backgroundColor: d.colors.first }}
                      className="w-5 h-5"
                    ></div>
                    <div
                      style={{ backgroundColor: d.colors.second }}
                      className="w-5 h-5"
                    ></div>
                    <div
                      style={{ backgroundColor: d.colors.third }}
                      className="w-5 h-5"
                    ></div>
                    <div
                      style={{ backgroundColor: d.colors.fourth }}
                      className="w-5 h-5"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex gap-8">
                <p>Available product</p>
                <div className="flex gap-2">
                  {d.scale.map((i) => (
                    <p>{i}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
