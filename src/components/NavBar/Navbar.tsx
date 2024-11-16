import CartIcon from "../../../public/assets/Icons/CartIcon";
import LogoIcon from "../../../public/assets/Icons/Logo.Icon";

export default function Navbar() {
  return (
    <nav className="absolute flex flex-col gap-6 font-manrope tracking-widest font-medium justify-center items-center top-0 left-0 w-full z-50 mt-4">
      <div className="text-white flex flex-row justify-between  w-[1110px] py-1">
        <div>
          <LogoIcon />
        </div>
        <ul className="flex flex-row gap-4  ">
          <li className="text-sm transition-all hover:text-[#FBAF85] hover:cursor-pointer">
            HOME
          </li>
          <li className="text-sm  transition-all hover:text-[#FBAF85] hover:cursor-pointer">
            HEADPHONES
          </li>
          <li className="text-sm transition-all hover:text-[#FBAF85] hover:cursor-pointer">
            SPKEAKERS
          </li>
          <li className="text-sm transition-all hover:text-[#FBAF85] hover:cursor-pointer">
            EARPHONES
          </li>
        </ul>
        <CartIcon />
      </div>
      <div className="w-[1110px] border-b-2 border-zinc-800" />
    </nav>
  );
}
