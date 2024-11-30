import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URl = "https://fakestoreapi.com";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${API_URl}/products`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItem = data?.map((pro) => (
    <div
      key={pro.id}
      className="border-2 border-amber-200 rounded px-1 py-2 text-center"
    >
      <img src={pro.image} alt="" className="h-[60%] w-[65%] mx-auto" />
      <h3 className="text-center p-2 max-w-[80%] overflow-hidden text-nowrap mx-auto max-lg:p-1 max-md:p-[2px]">
        {pro.title}
      </h3>

      <h3 className="text-center max-md:p-[1px]">{pro.price} USD</h3>
      <button className="border-2 w-full rounded-lg p-2 mb-9 text-xs items-center justify-center max-md:mb-1">
        Buy
      </button>
    </div>
  ));

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 border-2 rounded mx-auto w-[80%] p-3 shadow max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {productItem}
      </div>
    </div>
  );
};

export default Products;
