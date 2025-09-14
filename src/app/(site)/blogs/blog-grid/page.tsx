import React from "react";
import BlogGrid from "@/components/BlogGrid";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Krishna Creations",
  description: "One-stop destination for stylish and comfortable ladies’ kurtis. Whether dressing for work, a casual outing, or a festive event, our curated collection features beautifully designed kurtis crafted from premium fabrics like cotton, rayon, and georgette.",
  // other metadata
};


const BlogGridPage = () => {
  return (
    <main>
      <BlogGrid />
    </main>
  );
};

export default BlogGridPage;
