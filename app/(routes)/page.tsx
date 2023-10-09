import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("5c3ee55a-1bec-438a-94e0-14ea592b2ea2");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <ProductList title="Featured products" items={products} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
