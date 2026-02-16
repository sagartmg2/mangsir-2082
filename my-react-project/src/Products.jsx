import axios from "axios";
import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    setIsLoading(true);
    axios.get(`https://dummyjson.com/products/search?q=${searchText}&limit=50&skip=100`).then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    console.log("products componntent mounted");
    fetchProducts();
  }, [searchText]);

  return (
    <div>
      {/* <button onClick={fetchProducts}>fetch products</button> */}

      <input
        placeholder="search"
        onChange={(e) => {
          console.log(e.target.value);
          setSearchText(e.target.value);
        }}
      />

      {isLoading ? (
        <div className="products-list">
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
          <div className="product">
            <Skeleton height={150} className=" w-full" />
          </div>
        </div>
      ) : (
        <ul className="products-list">
          {products.map((el) => {
            return (
              <li className="product" key={el.id}>
                <img src={el.thumbnail} alt="" />
                <p>{el.title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
