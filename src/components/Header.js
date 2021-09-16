import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
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
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input className="input-bar" type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Side */}
        <div className="right-side">
          <div className="link">
            <p>Hello Guy</p>
            <p className="font-bold">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="relative link flex intems-center">
            <span className="items-count">0</span>
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
