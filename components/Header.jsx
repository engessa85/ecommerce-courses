"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton, useUser } from "@clerk/nextjs";
import { BiShoppingBag } from "react-icons/bi";
import CartStatus from "@/components/CartStatus";
import { useEffect } from "react";
import { getCardStatus } from "@/utils/CardStatus";
import { useAppContext } from "@/context";
import CardMenu from "./CardMenu";

function Header() {
  // const user = await currentUser();
  const user = useUser();
  const userEmail = user?.user?.emailAddresses[0]?.emailAddress;
  const [cardData, setCardData] = useState([]);
  const { state, setState } = useAppContext();
  const [closeMenu, setCloseMenu] = useState(false);
  console.log(userEmail);

  useEffect(() => {
    if (userEmail) {
      getCardStatus(userEmail).then((res) => {
        console.log("in header", res.data);
        setCardData((prev) => [...prev, res.data]);
        setState((prev) => [...prev, res.data]);
        console.log(cardData);
      });
    }
  }, [userEmail]);

  useEffect(() => {
    console.log(cardData.flat());
  }, [cardData]);

  return (
    userEmail && (
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-secondary"
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  className="flex items-center gap-4 cursor-pointer relative"
                  onClick={() => setCloseMenu((prev) => !prev)}
                >
                  <CartStatus /> <UserButton />
                  <CardMenu closeMenu={closeMenu} cardData = {cardData} />
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
