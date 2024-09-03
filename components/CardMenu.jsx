import React from "react";
import { useAppContext } from "@/context";
import Link from "next/link";

function CardMenu({ closeMenu, cardData }) {
  const gettingCard = cardData.flat();
  const baseURL = "http://localhost:1337";
  gettingCard.forEach(card=>{
    console.log(card?.attributes?.products?.data[0]?.attributes?.price);
    
  })

  const {state, setState} =  useAppContext();

  return (
    closeMenu && (
      <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-slate-100 shadow-md rounded-lg p-5 z-10 overflow-auto">
        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {gettingCard.map((card) => (

              <li key={card.id} className="flex items-center gap-4">
                <img
                  src={`${baseURL}${card?.attributes?.products?.data[0]?.attributes?.banner?.data?.attributes?.url}`}
                  alt=""
                  className="size-16 rounded object-cover"
                />
                <div>
                  <h3 className="text-sm text-gray-900">{card?.attributes?.products?.data[0]?.attributes?.title}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Category:{card?.attributes?.products?.data[0]?.attributes?.category}</dt>
                    </div>

                    <div>
                      <dt className="inline">Price:{card?.attributes?.products?.data[0]?.attributes?.price}</dt>
        
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-center">
            <Link
              href="/carts"
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              View my cart ({state.flat().length})
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default CardMenu;
