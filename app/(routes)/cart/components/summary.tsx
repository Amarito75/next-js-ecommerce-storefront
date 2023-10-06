"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("sucess")) {
      toast.success("Payment completed !");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 bg-beige lg:col-span-5">
      <div className="mt-2 space-y-4">
        <div className="flex items-center justify-between">
          <div className="mt-2">
            <div className="">Grand total :</div>
            <p className="text-xl">
              <Currency value={totalPrice} />
            </p>
          </div>
          <Button onClick={onCheckout}>Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
