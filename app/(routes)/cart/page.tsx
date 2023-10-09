"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-beige">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl">Your bag</h1>
          <div className="mt-16 lg:grid lg:grid-cols12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p>No product added to cart.</p>}
              <ul className="">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
          <Summary />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
