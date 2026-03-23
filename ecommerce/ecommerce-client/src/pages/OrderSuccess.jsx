import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import notify from "../utils/notify";

export default function OrderSuccess() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let token = localStorage.getItem("accessToken");

    axios
      .post(
        "http://localhost:3000/api/orders-verification",
        {
          token: searchParams.get("data"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setIsVerifying(false);
        notify("order created");
      })
      .catch((err) => {
        notify("something went wrong. pelase contact support");
      });
  }, []);

  return (
    <div className="h-[70vh]">
      <div>
        {isVerifying ? (
          <p>is verifying .. please wait ...</p>
        ) : (
          <div className="container mt-12">
            <Link to="/orders"> got orders page</Link>
          </div>
        )}
      </div>
    </div>
  );
}
