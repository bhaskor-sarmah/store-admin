import React from "react";
import { AddCategory } from "./AddCategory";
import AllCategories from "./AllCategories";

export const Category = () => {
  return (
    <main>
      <div className="container-fluid">
        <h2 className="mt-30 page-title">Categories</h2>
        <AddCategory />
        <AllCategories />
      </div>
    </main>
  );
};
