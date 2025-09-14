import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Krishna Creations",
  description: "One-stop destination for stylish and comfortable ladies’ kurtis. Whether dressing for work, a casual outing, or a festive event, our curated collection features beautifully designed kurtis crafted from premium fabrics like cotton, rayon, and georgette.",
  // other metadata
};


const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
