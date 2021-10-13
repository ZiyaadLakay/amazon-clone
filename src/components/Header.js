import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const items = useSelector(selectItems);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          name: user.displayName,
        },
        { merge: true }
      );
    }
  }, [user]);

  const goToLogin = () => {
    router.push("login");
  };

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue">
        <div className="pt-1 pb-1 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/amazon.svg"
            width="70"
            height="50"
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input className="input-bar" type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Side */}
        <div className="right-side">
          <div
            className="link"
            onClick={() => {
              if (user) {
                auth.signOut();
                alert("Sigined Out of Account");
              } else {
                goToLogin();
              }
            }}
          >
            {user ? <p>Hello {user.displayName}</p> : <p>Sign In</p>}

            <p className="font-bold">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div
            className="relative link flex items-center"
            onClick={() => router.push("checkout")}
          >
            <span className="items-count">{items.length}</span>
            <ShoppingCartIcon className="h-10" />
            <p className="basket-text">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
        </p>
        All
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personel Care</p>
      </div>
    </header>
  );
}

export default Header;
