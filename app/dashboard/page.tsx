import { redirect } from "next/dist/server/api-utils";

import ProductCard from "@/_components/ProductCard";
import api from "@/lib/axios";
import { TProduct } from "@/types";

const Page = async () => {
  const { data, status } = await api.get("api/v1/products");
  console.log(data);

  if (status !== 200) {
    return <p className="text-red-500">Oops there was an error</p>;
  }

  const Products = data.map((p: TProduct, index: number) => {
    return (
      <div key={index} className="w-sm">
        {
          <ProductCard
            name={p.name}
            price={p.price}
            imageUrl={`/assets/products/${p.name}.png`}
            link={`/dashboard/products/${p.id}`}
          />
        }
      </div>
    );
  });

  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="text-lg md:text-xl">Explore Products</h2>
      <div className="flex flex-wrap gap-4 md:gap-6">{Products}</div>
    </div>
  );
};

export default Page;
