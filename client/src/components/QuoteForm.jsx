import { useState } from "react";

export default function QuoteForm(){

const [service,setService]=useState("packers");

return(

<section className="py-20 bg-white">

<div className="max-w-5xl mx-auto shadow-2xl rounded-3xl p-10">

<h2 className="text-4xl font-bold mb-8">

Instant Moving Quote

</h2>

<div className="flex gap-4 mb-8">

<button
onClick={()=>setService("packers")}
className={`px-6 py-3 rounded-xl ${
service==="packers"
? "bg-blue-900 text-white"
: "bg-gray-200"
}`}
>

Packers & Movers

</button>

<button
onClick={()=>setService("transport")}
className={`px-6 py-3 rounded-xl ${
service==="transport"
? "bg-yellow-400"
: "bg-gray-200"
}`}
>

Gayatri Transport

</button>

</div>

<div className="grid md:grid-cols-2 gap-6">

<input
className="border rounded-xl p-4"
placeholder="Pickup Location"
/>

<input
className="border rounded-xl p-4"
placeholder="Destination"
/>

<input
type="date"
className="border rounded-xl p-4"
/>

<input
placeholder="Mobile Number"
className="border rounded-xl p-4"
/>

</div>

<button className="mt-8 w-full bg-blue-900 text-white py-4 rounded-xl text-lg">

Get Free Quote

</button>

</div>

</section>

)

}
