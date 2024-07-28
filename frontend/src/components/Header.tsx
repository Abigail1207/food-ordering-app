import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="contanier mx-auto flex justify-between items-center"></div>
      <Link
        to="/"
        className="text-3xl font-bold tracking-tight text-orange-500"
      >
        MernEats.com
      </Link>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
