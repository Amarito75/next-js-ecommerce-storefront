"use client";

import { Product } from "@/types";
import React from "react";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { LuShoppingCart } from "react-icons/lu";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-3xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Media :</h3>
        <div>{data?.media?.name}</div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 uppercase">
          Add To Cart
          <LuShoppingCart className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
