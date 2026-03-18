import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [carts, setCarts] = useState([]);

  let token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCarts(res.data.data);
      });
  }, []);

  return (
    <div>
      <div class=" container mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 class="text-2xl font-semibold text-[#1a1a6e] mb-8 tracking-tight">Your Cart</h1>

        <div class="grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-[#1a1a6e] font-semibold text-sm uppercase tracking-wider">
          <div class="col-span-5">Product</div>
          <div class="col-span-2 text-center">Price</div>
          <div class="col-span-3 text-center">Quantity</div>
          <div class="col-span-2 text-right">Total</div>
        </div>

        <div id="cart-items" class="divide-y divide-gray-100">
          {carts.map((el) => {
            return (
              <div class="cart-row grid grid-cols-12 gap-4 py-5 items-center group">
                <div class="col-span-5 flex items-center gap-4">
                  <div class="relative">
                    <img src={`${import.meta.env.VITE_API_URL}/${el.product.images[0]?.path}`} class="w-16 min-w-16 h-16 object-cover rounded-lg shadow-sm" alt="Bag" />
                    <button onclick="removeItem(this)" class="remove-btn absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white border border-gray-300 text-gray-400 text-xs flex items-center justify-center shadow-sm">
                      ✕
                    </button>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800 text-sm capitalize">{el.product.title}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{el.product.description}</p>
                    <p class="text-xs text-gray-400 mt-0.5">Stock: {el.product.stock}</p>
                  </div>
                </div>
                <div class="col-span-2 text-center text-sm text-gray-700 font-medium">${el.product.discountedPrice}</div>
                <div class="col-span-3 flex items-center justify-center">
                  <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button class="qty-btn w-8 h-8 text-gray-500 hover:bg-pink-500 hover:text-white text-sm flex items-center justify-center" onClick={() => {}}>
                      −
                    </button>
                    <span class="qty-val w-8 h-8 flex items-center justify-center text-sm text-gray-800 font-medium border-x border-gray-200">{el.quantity}</span>
                    <button class="qty-btn w-8 h-8 text-gray-500 hover:bg-pink-500 hover:text-white text-sm flex items-center justify-center" onclick={() => {}}>
                      +
                    </button>
                  </div>
                </div>
                <div class="col-span-2 text-right text-sm font-semibold text-gray-800">${el.product.discountedPrice * el.quantity}</div>
              </div>
            );
          })}
        </div>
        <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
          <button onclick="clearCart()" class="px-7 py-3 bg-[#ec4899] text-white text-sm font-medium rounded-full hover:bg-[#db2777] transition-colors duration-200 shadow-sm hover:shadow-md">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
