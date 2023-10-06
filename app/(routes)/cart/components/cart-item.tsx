"use client";

import React from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { LuX } from "react-icons/lu";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.image[0].url}
          alt={""}
          className="object-cover object-center border border-black"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-betwen sm:ml-6">
        <div className="absolute z-50 right-0 top-0">
          <IconButton onClick={onRemove} icon={<LuX size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <p className="">{data.name}</p>
            <div className="mt-1 flex text-sm">
              <p className="place-self-end ">{data.media.name}</p>
            </div>
            <Currency value={data.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
