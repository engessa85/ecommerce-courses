"use client";

import React from "react";
import { getSingleData } from "@/utils/SingleProductApi";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { filtereData } from "@/utils/ProductFilter";
import ProductCard from "@/components/ProductCard";
import Bread from "@/components/Bread";
import { usePathname } from "next/navigation";
import { createCard } from "@/utils/SingleProductApi";
import { useUser } from "@clerk/nextjs";
import { useAppContext } from "@/context";

function page({ params }) {
  const { productId } = params;
  const [product, setProdcut] = useState([]);
  const [filterdData, setfiltereddata] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseURL = "http://localhost:1337";
  const imageURL = `${baseURL}${product?.attributes?.banner?.data?.attributes?.url}`;
  const title = product?.attributes?.title;
  const desc = product?.attributes?.description[0]?.children[0]?.text;
  const price = product?.attributes?.price;
  const category = product?.attributes?.category;
  const instantDelivery = product?.attributes?.instantDelivery;
  const pathIs = usePathname();
  const user = useUser()

  const {state, setState} = useAppContext()
  
  const username = user?.user?.fullName
  const userEmail = user?.user?.emailAddresses[0]?.emailAddress

  
  useEffect(() => {
    getSingleData(productId).then((res) => {
      const productData = res.data;
      setProdcut(productData);
      const categ = productData?.attributes?.category;

      filtereData(categ).then((item) => {
        setfiltereddata(item.data);
        setLoading(true);
      });
    });
  }, []);

  const handleAddingCart = () => {
    const data = {
      data: {
        username: username,
        email: userEmail,
        products: product?.id,
      },
    };

    createCard(data)
      .then((res) => {
        console.log("here",res.data)
        setState((prev)=>[...prev, res.data])
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto p-16 ">
      <Bread product={product} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-3">
        {loading ? (
          <div className="mx-auto">
            <img
              src={imageURL}
              alt={title}
              className="rounded-lg w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-slate-200 animate-pulse mx-auto"></div>
        )}

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-gray-400">{category}</p>
            <p className="text-[15px]">{desc}</p>
            <p className="text-gray-500 text-[11px] flex items-center">
              Eligible for Instant Delivery
              {instantDelivery ? (
                <BiSolidBadgeCheck className="text-xl text-secondary ml-1" />
              ) : (
                <TbAlertOctagonFilled className="text-xl text-red-700 ml-1" />
              )}
            </p>
            <h3 className="text-3xl font-medium text-secondary">${price}</h3>
          </div>
          <button
            onClick={handleAddingCart}
            className="bg-secondary p-3 mt-3 flex items-center justify-center rounded-lg gap-2 text-white"
          >
            {" "}
            <FaCartShopping />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <h1 className="text-[26px] font-bold mb-2 text-black">
          Similar Products
        </h1>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filterdData.map((filterproduct) => (
              <div key={filterproduct.id}>
                <ProductCard product={filterproduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
