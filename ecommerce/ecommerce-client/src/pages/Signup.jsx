import { Link } from "react-router";
import BreadCrumb from "../components/BreadCrumb";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/signup", {
        email: "seller232334@gmail.com",
        firstName: "seller",
        password: "password",
      })
      .then((res) => {
        alert("success");
      })
      .catch((err) => {});
  };

  return (
    <div className="bg-white">
      {/* Top header area */}
      <BreadCrumb title={"Login"} />

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="flex min-h-[62vh] items-center justify-center py-14">
          <div className="w-full max-w-md">
            <div className="rounded-md bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <div className="px-10 py-10">
                <h2 className="text-center text-xl font-semibold text-slate-900">Signup</h2>
                <p className="mt-1 text-center text-xs text-slate-500">Please Signup using account detail bellow.</p>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input name="firstName" placeholder="firstName" className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
                  </div>
                  <div>
                    <input name="lastName" placeholder="lastName" className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
                  </div>

                  <div>
                    <input type="email" name="email" placeholder="Email Address" className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100" autoComplete="email" />
                  </div>

                  <div>
                    <input type="password" name="password" placeholder="Password" className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100" autoComplete="current-password" />
                  </div>

                  <div className="flex items-center gap-3">
                    <label htmlFor="isSeller">Signup as both Buyer and Seller</label>
                    <input id="isSeller" type="checkbox" name="isSeller" className="h-5 w-5 rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
                  </div>

                  <div className="pt-1">
                    <a href="#" className="text-xs text-slate-500 hover:text-slate-700">
                      Forgot your password?
                    </a>
                  </div>

                  <button className="mt-1 h-11 w-full rounded bg-pink-600 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:ring-4 focus:ring-pink-200 focus:outline-none">Sign Up</button>

                  <p className="pt-3 text-center text-xs text-slate-500">
                    Already have an Account?
                    <Link to="/login" className="ml-1 text-slate-600 hover:text-pink-600">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
