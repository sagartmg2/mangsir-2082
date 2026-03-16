import React from "react";
import BreadCrumb from "../components/BreadCrumb";

export default function Products() {
  return (
    <>
      <BreadCrumb title={"Products"} />
      <div className="container">
        <div className="grid grid-cols-6 mt-12">
          <div className="grid-cols-1 sticky top-8 h-[400px]">
            <div>
              <h2 class="filter-section-title text-indigo-900 text-base mb-3 border-b border-gray-200 pb-2">Product Brand</h2>
              <ul class="space-y-2">
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" class="rounded" /> Coaster Furniture
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" class="rounded" /> Fusion Dot High Fashion
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked class="rounded" /> Unique Furniture Restor
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked class="rounded" /> Dream Furniture Flipping
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked class="rounded" /> Young Repurposed
                </li>
                <li class="custom-checkbox flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked class="rounded" /> Green DIY furniture
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-5">
           {
            [1,2,3,4,5,6].map(el =>{
                return  <div class=" bg-white rounded-xl border border-gray-200 flex gap-0 overflow-hidden mb-8">
              <div class="w-56 shrink-0 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" alt="Watch" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <h3 class="text-xl font-semibold text-[#111C85]">Dictum morbi</h3>
                  </div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="price-sale text-base text-[#111C85]">$26.00</span>
                    <span class="price-original text-sm line-through text-secondary">$52.00</span>
                    <div class="flex items-center gap-0.5 ml-2">
                      <span class="star-filled text-xs">★★★★</span>
                      <span class="star-empty text-xs">★</span>
                    </div>
                  </div>
                  <p class="text-sm text-[#9295AA] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                </div>
                <div class="flex gap-2 mt-4">
                  <button class="action-btn border border-gray-200 rounded-lg p-2 text-gray-500 ">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                  <button class="action-btn border border-gray-200 rounded-lg p-2 text-gray-500 ">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            })
           }
          </div>
        </div>
      </div>
    </>
  );
}
