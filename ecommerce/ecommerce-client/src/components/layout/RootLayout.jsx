import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
