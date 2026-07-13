import {
Phone,
Mail,
MapPin
} from "lucide-react";

export default function Footer(){

return(

<footer className="bg-slate-950 text-white py-16">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

<div>

<h2 className="text-3xl font-bold text-yellow-400">

DHARSHAN

</h2>

<p>

Packers & Movers

</p>

<p>

Powered by Gayatri Transport

</p>

</div>

<div>

<h3 className="font-bold mb-5">

Quick Links

</h3>

<p>Home</p>

<p>About</p>

<p>Services</p>

<p>Contact</p>

</div>

<div>

<h3 className="font-bold mb-5">

Contact

</h3>

<p className="flex gap-2">

<Phone size={18}/>

7868915653

</p>

<p className="flex gap-2 mt-3">

<Mail size={18}/>

info@dharshanpackers.com

</p>

<p className="flex gap-2 mt-3">

<MapPin size={18}/>

Tamil Nadu

</p>

</div>

</div>

<div className="text-center mt-10 text-gray-400">

©2026 Dharshan Packers & Movers

</div>

</footer>

)

}
