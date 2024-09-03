'use client'

import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useAppContext } from "@/context";

function CartStatus() {
 
  
  const {state} = useAppContext()
  console.log("state", state);
  
 
  
  return (
    <div className="flex items-center">
      <BiShoppingBag className="w-7 h-7" />
      ({state.flat().length}) 
    </div>
  );
}

export default CartStatus;
