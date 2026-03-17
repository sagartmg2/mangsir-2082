import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { useSelector } from "react-redux";
import notify from "../utils/notify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const user = useSelector((store) => store.user.value);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  let token = localStorage.getItem("accessToken");

  const addToCart = (productId) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/carts`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        notify("added to cart");
      });
  };

  return (
    <>
      <BreadCrumb title={"Products"} />
      <div className="container">
        <div className="grid grid-cols-6 mt-12">
          <div className="grid-cols-1 sticky top-8 h-[400px]">
            <div>
              <h2 class="filter-section-title text-indigo-900 text-base mb-3 border-b border-gray-200 pb-2">Product Category</h2>
              <ul class="space-y-2">
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" class="rounded" /> Electronics
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" class="rounded" /> Clothes
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked class="rounded" /> Furniture
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-5">
            {products.map((product) => {
              return (
                <div class=" bg-white rounded-xl border border-gray-200 flex gap-0 overflow-hidden mb-8">
                  <div class="w-56 shrink-0 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={`${import.meta.env.VITE_API_URL}/${product.images[0]?.path}`} alt="Watch" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="text-xl font-semibold text-[#111C85]">{product.title}</h3>
                      </div>
                      <div class="flex items-center gap-2 mb-2">
                        <span class="price-sale text-base text-[#111C85]">${product.discountedPrice}</span>
                        <span class="price-original text-sm line-through text-secondary">${product.basePrice}</span>
                      </div>
                      <p class="text-sm text-[#9295AA] leading-relaxed">{product.description}</p>
                    </div>
                    <div class="flex gap-2 mt-4">
                      <button
                        class="action-btn border border-gray-200 rounded-lg p-2 text-gray-500 "
                        onClick={() => {
                          // add to cart
                          if (user) {
                            addToCart(product.id);
                          } else {
                            notify("login required", "error");
                          }
                        }}
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
