import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact(){

return(

<>

<Navbar/>

<section className="py-24 max-w-5xl mx-auto">

<h1 className="text-5xl font-bold mb-10">

Contact Us

</h1>

<form className="grid gap-5">

<input
className="border p-4 rounded-xl"
placeholder="Name"
/>

<input
className="border p-4 rounded-xl"
placeholder="Mobile"
/>

<textarea
rows="5"
className="border p-4 rounded-xl"
placeholder="Message"
/>

<button
className="bg-yellow-400 py-4 rounded-xl font-bold"
>

Send Message

</button>

</form>

</section>

<Footer/>

</>

)

}
