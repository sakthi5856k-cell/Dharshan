import { Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {

return (

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 text-white py-28">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

<div>

<motion.h1

initial={{opacity:0,y:-40}}

animate={{opacity:1,y:0}}

transition={{duration:.7}}

className="text-6xl font-extrabold"

>

DHARSHAN

<span className="block text-yellow-400">

Packers & Movers

</span>

</motion.h1>

<p className="mt-5 text-lg">

Powered by Gayatri Transport

</p>

<p className="mt-5 text-gray-300">

Safe Packing • Secure Transport • On-Time Delivery

</p>

<div className="mt-8 flex gap-4">

<button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">

Get Quote

</button>

<button className="border px-8 py-4 rounded-xl">

Our Services

</button>

</div>

</div>

<div className="flex justify-center">

<Truck size={220} className="text-yellow-400"/>

</div>

</div>

</section>

)

}
