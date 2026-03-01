import React from "react";
import { Mail, Phone, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="bg-[#7E33E0]">
        <div className="container flex flex-col sm:flex-row gap-4 items-center justify-between py-3 text-white ">
          <div className="flex gap-[10px]">
            <div className="flex">
              <Mail />
              <span>mhhasanul@gmail.com</span>
            </div>

            <div className="flex">
              <Phone />
              <span>+977 9843345</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex">
              <Link to="/login">Login</Link>
              <User />
            </div>
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row container justify-between py-5 ">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-[22px] lg:text-[27px] xl:text-[34px] text-[#0D0E43] font-semibold">
            Hekto
          </Link>
          <div className="flex gap-3">
            <Link to="/">Home</Link>
            <a>Products</a>
          </div>
        </div>
        <form className="flex ">
          <input className="border px-4" />
          <button className="bg-[#FB2E86] text-white px-2 py-1">
            <Search />
          </button>
        </form>
      </div>
    </>
  );
}
