import { Link } from "react-router-dom";
import { Phone, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            DHARSHAN
          </h1>

          <p className="text-sm">
            Packers & Movers
          </p>

          <p className="text-xs text-gray-300">
            Powered by Gayatri Transport
          </p>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <a
          href="tel:7868915653"
          className="bg-yellow-400 text-black px-4 py-2 rounded-xl flex items-center gap-2"
        >
          <Phone size={18} />
          Call Now
        </a>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}
