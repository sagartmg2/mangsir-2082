import React from "react";
import { Mail, Phone, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between py-3 text-white bg-[#7E33E0]">
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
          <span>Login</span>
          <User />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}
