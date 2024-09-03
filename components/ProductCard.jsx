import React from "react";
import Image from "next/image";
import { FaDev } from "react-icons/fa";
import Link from "next/link";

const baseURL = "http://localhost:1337";
function ProductCard({ product }) {

  const imageURL = `${baseURL}${product.attributes.banner.data.attributes.url}`;
  const title = product.attributes.title;
  const desc = product.attributes.description[0].children[0].text;
  const price = product.attributes.price;
  const category = product.attributes.category;

  return (
    <Link href={`/product-details/${product.id}`}>
      <div className="flex flex-col justify-between hover:border hover:shadow-md border-teal-400 rounded-lg h-full hover:cursor-pointer">
        <div className="">
          <Image
            src={imageURL}
            alt="image"
            width={400}
            height={350}
            className="object-contain h-full w-full"
          />
        </div>
        <div className="p-3 flex justify-between bg-gray-100">
          <div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm text-gray-300 flex items-center gap-1">
              <FaDev className="w-7 h-7 text-primary" />
              {category}
            </p>
          </div>
          <div>
            <span className="text-slate-900">{`${price}$`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
